from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session
from database import get_db, create_user, get_user
from schemas.register import Register
from fastapi.responses import JSONResponse
import random
import string

router = APIRouter()


@router.post("/api/v1/meme-api/register")
async def register(user: Register, db: Session = Depends(get_db)):
    result = get_user(db, type="email", email=user.email)
    if result:
        return JSONResponse(
            content=[
                {"meme-api": {"result": "user already exist", "status_code": 400}}
            ],
            status_code=400,
        )
    else:
        characters = string.ascii_letters + string.digits
        api_key = "".join(random.choice(characters) for _ in range(30))
        result = create_user(db=db, user=user, api_key=api_key)
        return JSONResponse(
            content=[
                {
                    "meme-api": {
                        "result": [user.email, user.password, api_key],
                        "status_code": 201,
                    }
                }
            ],
            status_code=201,
        )
