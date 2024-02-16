from sqlalchemy import Table, Column, Integer, String, Boolean, Float
from sqlalchemy.orm import registry
from database import metadata, db_session

mapper_registry = registry()


class Users:
    query = db_session.query_property()

    def __init__(
        self,
        username,
        email,
        password,
        created_at,
        is_active=True,
    ):
        self.username = username
        self.email = email
        self.password = password
        self.created_at = created_at
        self.is_active = is_active

    def __repr__(self):
        return f"<User {self.username}>"


users = Table(
    "users",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("username", String),
    Column("email", String),
    Column("password", String),
    Column("created_at", Float),
    Column("is_active", Boolean, default=True),
)

mapper_registry.map_imperatively(Users, users)
