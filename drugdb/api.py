from flask import Blueprint, request
from flask_cors import cross_origin
from .db import get_db


bp = Blueprint('api', __name__, url_prefix='/api')

PAGE_SIZE = 10


@bp.route('/search')
@cross_origin()
def search():
    q = request.args.get('query', '').strip()
    if len(q) == 0:
        return ({ 'error': 'No query provided.' }, 400)

    db = get_db()
    query = 'select * from drug_fts where drug_fts match ? order by rank'
    params = [f'"{q}"']
    drugs = db.execute(query, params).fetchall()

    return paginate(drugs)


@bp.route('/drugs/<int:drug_id>')
@cross_origin()
def show_drug(drug_id):
    drug = get_drug(drug_id)

    return drug if drug is not None else ('', 404)


def get_drug(drug_id):
    params = [drug_id]
    drug = get_db().execute(
        'select * from drug where id = ?',
        params
    ).fetchone()

    return drug


def paginate(drugs):
    try:
        page = request.args.get('page', 1, int)
    except ValueError:
        return ({ 'error': 'Page parameter should be a positive integer' }, 400)

    k = len(drugs) // PAGE_SIZE + int(len(drugs) % PAGE_SIZE != 0)
    last_page = max(1, k)
    if not 1 <= page <= last_page:
        return ({ 'error': 'Invalid page', 'first_page': 1, 'last_page': last_page }, 404)

    lo = (page - 1) * PAGE_SIZE
    hi = lo + PAGE_SIZE

    return dict(
        drugs=drugs[lo:hi],
        page=page,
        last_page=last_page,
        per_page=PAGE_SIZE,
        total=len(drugs)
    )
