from flask_restx import Resource
from flask_jwt_extended import (
    create_access_token,
    get_jwt_identity,
    jwt_required,
    JWTManager,
)


class Login(Resource):
    def get(self, username, password):
        return {"message": [username, password]}, 200
