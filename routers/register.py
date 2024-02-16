from flask_restx import Resource


class Register(Resource):
    def post(self, username, password):
        return {"message": [username, password]}, 200
