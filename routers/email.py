from fastapi import APIRouter
from models import Email
from email_validator import validate_email, EmailNotValidError
from fastapi.responses import JSONResponse

router = APIRouter()


@router.post("/api/v1/meme-api/email_validator")
async def email_validator(email: Email):
    try:
        emailinfo = validate_email(email.email, check_deliverability=False)
        result = emailinfo.normalized

    except EmailNotValidError as e:
        return JSONResponse(
            content=[{"meme-api": {"result": "email not valid", "status_code": 400}}],
            status_code=400,
        )
    else:
        return JSONResponse(
            content=[
                {
                    "meme-api": {
                        "result": "email valid",
                        "email": result,
                        "status_code": 200,
                    }
                }
            ],
            status_code=200,
        )
