from flask_restx import Resource
from database import add_user, get_user
import datetime


class Register(Resource):
    def post(self, username, email, password):
        result = get_user("register", email=email, username=username)
        if not result:
            add_user(username, email, password, datetime.datetime.utcnow().timestamp())
            return {"message": "success create user"}, 201
        else:
            return {"message": "user already"}, 400
