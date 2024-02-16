from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from database.config import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String)
    password = Column(String)
    api_key = Column(String)
    is_active = Column(Boolean, default=True)
