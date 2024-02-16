from flask_restx import Resource
from jwt import encode
from config import jwt_secret_key, algorithm
from database import get_user


class Login(Resource):
    def get(self, username, password):
        result = get_user("login", username=username, password=password)
        if result:
            encoded_jwt = encode(
                {"username": result.username}, jwt_secret_key, algorithm=algorithm
            )
            return {"token": encoded_jwt}, 200
        return {"message": "Bad username or password"}
