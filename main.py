from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from database import get_db, engine, create_user
from routers.register import router as router_register
from models import Base
from routers.email import router as router_email
from routers.login import router as router_login
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router_register)
app.include_router(router_email)
app.include_router(router_login)


@app.get("/")
async def root():
    return {"message": "Hello World"}
