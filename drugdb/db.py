from sqlite3 import connect, PARSE_DECLTYPES
from json import loads

from flask import current_app, g
from flask.cli import with_appcontext
from click import command, echo

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


def get_db():
    if 'db' not in g:
        g.db = connect(
            current_app.config['DATABASE'],
            detect_types=PARSE_DECLTYPES
        )
        g.db.row_factory = dict_factory
    return g.db


def close_db(e=None):
    db = g.pop('db', None)
    if db is not None:
        db.close()


def fill_drug_table(db):
    query = 'insert into drug values (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    done = False
    with current_app.open_resource('drugs.json') as f:
        content = f.read().decode('utf8')
        parsed = loads(content)
        items = parsed.get('data')
        params = []
        for item in items:
            params.append([' '.join(s.split()) for s in item])
        try:
            db.execute('begin')
            db.executemany(query, params)
            done = True
        except:
            db.execute('rollback')
        finally:
            if db.in_transaction:
                db.execute('commit')
    return done


def init_db():
    db = get_db()
    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))
    return fill_drug_table(db)


@command('init-db')
@with_appcontext
def init_db_command():
    """Clear the existing data, create new tables and fill them."""
    echo('Initialized the database.' if init_db() else 'Database not initialized.')


def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)
