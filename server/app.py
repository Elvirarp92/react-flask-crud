from flask import Flask, abort, request, jsonify, g, url_for
from flask_sqlalchemy import SQLAlchemy
from config import Config
from os import environ, path
from hmac import digest

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)

# MODELS #

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(32), nullable=False)
  email = db.Column(db.String(120), unique=True, nullable=False)
  password = db.Column(db.String(512), nullable=False)
  company_id = db.Column(db.Integer, db.ForeignKey('company.id'), nullable=False)

class Company(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(80), nullable=False)
  users = db.relationship('User', backref='company', lazy=True)

# ROUTES #

@app.route('/users', methods=['POST'])
def new_user():
  username = request.json.get('username')
  plain_pw = request.json.get('password')
  email = request.json.get('email')
  company_name = request.json.get('company')

  if username is None or plain_pw is None or email is None or company_name is None:
    abort(400) #missing arguments
  if User.query.filter_by(username = username).first() is not None or User.query.filter_by(email = email).first() is not None:
    abort(400) #existing username or email

  # hash password and create User instance
  password = digest('sha512', plain_pw, environ.get('SECRET_KEY'))

  user = User(username=username, email=email, password=password)

  # append user to company, after creating company if it does not exist
  if Company.query.filter_by(name=company_name).first() is None:
    company = Company(name=company_name)
  else:
    company = Company.query.filter_by(name=company_name).first()
  
  company.users.append(user)
  db.session.commit()
  return jsonify({'username': user.username, 'email': user.email}), 201, {'Location': url_for('get_user', id=user.id, _external=True)}

@app.route('/users/<int:id>')
def get_user(id):
  user = User.query.get(id)
  company = Company.query.get(user.company_id)

  if not user:
    abort(400)

  return jsonify({'username': user.username, 'email': user.email, 'company': company.name})

if __name__ == '__main__':
    if not path.exists('companies.sqlite'):
        db.create_all()
    app.run(debug=True)