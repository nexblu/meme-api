from sqlalchemy import Table, Column, Integer, String, Boolean, Float
from sqlalchemy.orm import registry
from database import metadata, db_session

mapper_registry = registry()


class Users:
    query = db_session.query_property()

    def __init__(
        self,
        growid,
        discord_id,
        world_lock=0,
        total_balance=0,
        created_at=None,
        is_active=True,
    ):
        self.growid = growid
        self.discord_id = discord_id
        self.world_lock = world_lock
        self.total_balance = total_balance
        self.created_at = created_at
        self.is_active = is_active

    def __repr__(self):
        return f"<User {self.growid}>"


users = Table(
    "users",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("growid", String),
    Column("discord_id", Integer),
    Column("world_lock", Integer),
    Column("total_balance", Integer),
    Column("created_at", Float),
    Column("is_active", Boolean, default=True),
)

mapper_registry.map_imperatively(Users, users)
