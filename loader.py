"""Create database for the application.

This script should be exec'ed from the project directory. 
"""
from os.path import dirname, join, abspath
from sqlite3 import connect
from json import load
from pathlib import Path
from sqlite3 import connect, Connection, Error as SqliteError


def fill_drug_table(db: Connection, json_path: str):
    query = 'insert into drug values (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    with open(json_path) as f:
        parsed = load(f)
        items = parsed.get('data')
        n = len(items)
        print(f'Number of drugs to be loaded: {n}')

        params = []
        for item in items:
            params.append([' '.join(s.split()) for s in item])
        try:
            db.execute('begin')
            db.executemany(query, params)
        except SqliteError as e:
            print('Error while inserting drugs:', e)
            db.execute('rollback')
        finally:
            if db.in_transaction:
                db.execute('commit')


dir_path = dirname(abspath(__file__))

json_path = join(dir_path, 'drugs.json')
schema_path = join(dir_path, 'schema.sql')

instance_path = join(dir_path, 'instance')
db_path = join(instance_path, 'db.sqlite')

Path(instance_path).mkdir(parents=True, exist_ok=True)
print('Instance folder created...')
db = connect(db_path, isolation_level=None)
with open(schema_path) as f:
    try:
        db.executescript(f.read())
        print('Database created...')
        fill_drug_table(db, json_path)
        print('Done.')
    except SqliteError as e:
        print('Error while executing database creation script:', e)
db.close()
