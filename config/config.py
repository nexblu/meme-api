from dotenv import load_dotenv
import os

load_dotenv()

jwt_secret_key = os.getenv("JWT_SECRET_KEY")
database_url = os.getenv("DATABASE_URL")
debug_mode = os.getenv("DEBUG")
algorithm = os.getenv("algorithm")
