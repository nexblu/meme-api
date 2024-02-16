from flask_restx import Resource
from jwt import encode
from config import jwt_secret_key, algorithm
import jwt


class Token(Resource):
    def get(self, token):
        result = jwt.decode(token, jwt_secret_key, algorithms=[algorithm])
        return result
