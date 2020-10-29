from flask import Flask, abort, request, jsonify, g, url_for
from flask_sqlalchemy import SQLAlchemy
from config import Config
from os import environ
from hmac import digest

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)

from app import routes
from app import models

if __name__ == '__main__':
   db.create_all()
   app.run(debug = True)