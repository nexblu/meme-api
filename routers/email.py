from flask_restx import Resource
from email_validator import validate_email, EmailNotValidError
import smtplib
from email.mime.text import MIMEText
from config import smtp_port, smtp_server, email_sender, email_password


class EmailValidator(Resource):
    def post(self, email):
        try:
            emailinfo = validate_email(email, check_deliverability=False)
            email = emailinfo.normalized
        except EmailNotValidError as e:
            return {"message": "email not valid"}, 400
        else:
            return {"message": "email valid"}, 200


class EmailSend(Resource):
    def post(self, email, message, subject):
        msg = MIMEText(message, "html")

        msg["Subject"] = subject
        msg["From"] = email_sender
        msg["To"] = email

        try:
            with smtplib.SMTP(smtp_server, smtp_port) as server:
                server.starttls()
                server.login(email_sender, email_password)
                server.send_message(msg)
                server.quit()
        except:
            return {"message": "failed send email"}, 400
        else:
            return {"message": "success send email"}, 201
