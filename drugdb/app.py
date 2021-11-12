from flask import (
    Blueprint, render_template, request
)

from .db import get_db


bp = Blueprint('app', __name__)

ITEMS_PER_PAGE = 10


@bp.route('/')
def index():
    drugs, term, show_table, error = None, None, False, False
    context = {}

    if len(request.args) != 0:
        term = request.args.get('term', '').strip()
        if len(term) == 0:
            error = True
        else:
            show_table = True
            db = get_db()
            drugs = db.execute(
                # TODO: check if this can lead to sql injection.
                'select * from drug_fts where drug_fts match ? order by rank',
                [f'"{term}"']
            ).fetchall()

            if len(drugs) > ITEMS_PER_PAGE:
                row_count = len(drugs)
                context.update(paginate(drugs))
                context.update(row_count=row_count)
            else:
                context.update(drugs=drugs, show_pagination=False)

    context.update(term=term, show_table=show_table, error=error)

    return render_template('index.j2', **context)


@bp.route('/drug/<int:id>')
def show_drug(id):
    error = False
    drug = get_drug(id)
    ingredients = None
    if drug is None:
        error = True
    else:
        ingredients = drug['inn'].split(' + ')

    return render_template('drug.j2', drug=drug, ingredients=ingredients, error=error)


def get_drug(id):
    params = [id]
    drug = get_db().execute(
        'select * from drug where id = ?',
        params
    ).fetchone()

    return drug


def paginate(drugs):
    try:
        page = int(request.args.get('page', '1'))
    except ValueError:
        page = 1

    context = {}
    n = max(1, len(drugs) // ITEMS_PER_PAGE + (1 if len(drugs) % ITEMS_PER_PAGE != 0 else 0))

    page = page if 1 <= page <= n else 1
    previous_page = page - 1 if page > 1 else 1
    next_page = page + 1 if page < n else n
    last_page = n

    lo = (page - 1) * ITEMS_PER_PAGE
    hi = lo + ITEMS_PER_PAGE
    drugs = drugs[lo:hi]

    context.update(
        show_pagination=True,
        page=page,
        next_page=next_page,
        previous_page=previous_page,
        last_page=last_page,
        drugs=drugs
    )

    context.update()

    return context
