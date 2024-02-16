from flask import Flask
from flask_restx import Api
from routers.login import Login as login_routers
from routers.register import Register as register_routers

app = Flask(__name__)
api = Api(app)


api.add_resource(
    login_routers, "/api/v1/nexblu/login/<string:username>/<string:password>"
)
api.add_resource(
    register_routers, "/api/v1/nexblu/register/<string:username>/<string:password>"
)


if __name__ == "__main__":
    app.run(debug=True)
