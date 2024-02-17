from .config import db_session, init_db
from models import APIKey


def add_api_key(api_key, user, created_at):
    init_db()
    api_key = APIKey(
        api_key,
        user,
        created_at,
    )
    db_session.add(api_key)
    db_session.commit()
