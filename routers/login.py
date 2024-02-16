from flask_restx import Resource


class Login(Resource):
    def get(self, username, password):
        return {"message": [username, password]}, 200
