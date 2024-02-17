from flask_restx import Resource
from database import add_user, get_user, add_api_key
import datetime
from utils import Misc
import random
from sqlalchemy.exc import OperationalError


class Register(Resource):
    def post(self, username, email, password):
        api_key = Misc.generate_api_key(random.randint(15, 30))
        try:
            result = get_user("register", email=email, username=username)
        except OperationalError:
            add_user(username, email, password, datetime.datetime.utcnow().timestamp())
            add_api_key(api_key, username, datetime.datetime.utcnow().timestamp())
            return {"message": "success create user"}, 201
        else:
            if not result:
                add_user(
                    username, email, password, datetime.datetime.utcnow().timestamp()
                )
                add_api_key(api_key, username, datetime.datetime.utcnow().timestamp())
                return {"message": "success create user"}, 201
            else:
                return {"message": "user already"}, 400
