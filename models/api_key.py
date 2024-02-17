from sqlalchemy import Table, Column, Integer, String, Boolean, Float
from sqlalchemy.orm import registry
from database import metadata, db_session

mapper_registry = registry()


class APIKey:
    query = db_session.query_property()

    def __init__(
        self,
        api_key,
        user,
        created_at,
        is_active=True,
    ):
        self.api_key = api_key
        self.user = user
        self.created_at = created_at
        self.is_active = is_active

    def __repr__(self):
        return f"<{api_key}>"


api_key = Table(
    "api_key",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("api_key", String),
    Column("user", String),
    Column("created_at", Float),
    Column("is_active", Boolean, default=True),
)

mapper_registry.map_imperatively(APIKey, api_key)
