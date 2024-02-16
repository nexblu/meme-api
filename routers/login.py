from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session
from database import get_db, create_user, get_user
from schemas.register import Register
from fastapi.responses import JSONResponse

router = APIRouter()


@router.get("/api/v1/meme-api/login/{email}/{password}", response_model=Register)
async def login(email: str, password: str, db: Session = Depends(get_db)):
    result = get_user(db, type="login", email=email, password=password)
    if result:
        return JSONResponse(
            content=[{"meme-api": {"result": "success login", "status_code": 200}}],
            status_code=200,
        )
    else:
        return JSONResponse(
            content=[
                {
                    "meme-api": {
                        "result": "failed login",
                        "status_code": 404,
                    }
                }
            ],
            status_code=404,
        )
