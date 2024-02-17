import random
import string


class Misc:
    @staticmethod
    def generate_api_key():
        characters = string.ascii_letters + string.digits
        return "".join(random.choice(characters) for _ in range(20))
