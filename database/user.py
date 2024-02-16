from .config import db_session, init_db
from models import Users
from sqlalchemy import and_, func, or_


def add_user(username, email, password, created_at):
    init_db()
    user = Users(
        username,
        email,
        password,
        created_at,
    )
    db_session.add(user)
    db_session.commit()


def get_user(type, **kwargs):
    email = kwargs.get("email")
    username = kwargs.get("username")
    password = kwargs.get("password")
    if type == "email":
        return Users.query.filter(func.lower(Users.email) == email.lower()).first()
    elif type == "login":
        return Users.query.filter(
            and_(
                func.lower(Users.username) == username.lower(),
                Users.password == password,
            )
        ).first()
    elif type == "register":
        return Users.query.filter(
            or_(
                func.lower(Users.username) == username.lower(),
                func.lower(Users.email) == email.lower(),
            )
        ).first()
