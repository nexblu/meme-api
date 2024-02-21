from flask_restx import Resource
from jwt import encode
from config import jwt_secret_key, algorithm
from database import get_user
from sqlalchemy.exc import OperationalError


class Login(Resource):
    def get(self, username, password):
        try:
            result = get_user("login", username=username, password=password)
        except OperationalError:
            return {"message": "bad username or password", "status_code": 404}, 404
        else:
            if result:
                encoded_jwt = encode(
                    {"username": result.username}, jwt_secret_key, algorithm=algorithm
                )
                return {"token": encoded_jwt, "status_code": 200}, 200
            return {"message": "bad username or password"}, 404
