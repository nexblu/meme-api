from sqlalchemy.orm import Session
from schemas.register import Register
from models.user import User
from sqlalchemy import and_, func


def create_user(db: Session, user: Register, api_key):
    db_user = User(email=(user.email).lower(), password=user.password, api_key=api_key)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_user(db: Session, type, **kwargs):
    email = kwargs.get("email")
    password = kwargs.get("password")
    if type == "email":
        return db.query(User).filter(func.lower(User.email) == email.lower()).first()
    if type == "login":
        return (
            db.query(User)
            .filter(and_(User.email == email, User.password == password))
            .first()
        )
