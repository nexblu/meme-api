from flask import Flask
from flask_restx import Api
from routers.login import Login as login_routers
from routers.register import Register as register_routers
from routers.token import Token as token_routers
from config import debug_mode

app = Flask(__name__)
api = Api(app)


api.add_resource(
    login_routers, "/api/v1/nexblu/login/<string:username>/<string:password>"
)
api.add_resource(
    register_routers,
    "/api/v1/nexblu/register/<string:username>/<string:email>/<string:password>",
)
api.add_resource(
    token_routers,
    "/api/v1/nexblu/token/<string:token>",
)

if __name__ == "__main__":
    app.run(debug=debug_mode)
