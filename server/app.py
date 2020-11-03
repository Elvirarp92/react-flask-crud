from flask import Flask, abort, request, jsonify, g, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import Config
from os import environ, path
from hmac import digest
from re import compile, fullmatch

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
email_regex = compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")
cors = CORS(app, origins=['http://localhost:3000/*'])


# MODELS #


class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(512), nullable=False)
    company_id = db.Column(db.Integer, db.ForeignKey(
        'companies.id'), nullable=False)


class Company(db.Model):

    __tablename__ = "companies"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    users = db.relationship('User', backref='company')


if not path.exists('companies.sqlite3'):
    print('creating tables')
    db.create_all()

# AUXILIARY FUNCTIONS


def match_email(str):

    return fullmatch(email_regex, str)

# ROUTES #


@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_jsonified = []
    for user in users:
        users_jsonified.append(
            {'id': user.id, 'username': user.username, 'email': user.email, 'company': user.company.name})

    return jsonify({'users': users_jsonified})


@app.route('/users', methods=['POST'])
def new_user():

    username = request.form.get('username')
    plain_pw = request.form.get('password')
    email = request.form.get('email')
    company_name = request.form.get('company')

    if username is None or plain_pw is None or email is None or company_name is None:
        return jsonify({'error': 'missing fields'}), 400
    if User.query.filter_by(username=username).first() is not None or User.query.filter_by(email=email).first() is not None:
        return jsonify({'error': 'existing username or email'}), 400
    if match_email(email) is None:
        return jsonify({'error': 'invalid email'}), 400

    # hash password and create User instance
    password = digest(bytes(environ.get('SECRET_KEY'), 'utf-8'),
                      bytes(plain_pw, 'utf-8'), 'sha512')

    user = User(username=username, email=email, password=password)

    # append user to company, after creating company if it does not exist
    if Company.query.filter_by(name=company_name).first() is None:
        company = Company(name=company_name)
    else:
        company = Company.query.filter_by(name=company_name).first()

    company.users.append(user)
    db.session.add(company)
    db.session.commit()
    return jsonify({'username': user.username, 'email': user.email}), 201, {'Location': url_for('get_user', id=user.id, _external=True)}


@app.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({'error': 'id does not match database entry'}), 400

    return jsonify({'id': user.id, 'username': user.username, 'email': user.email, 'company': user.company.name})


@app.route('/users/<int:id>', methods=['PUT'])
def edit_user(id):
    new_username = request.form.get('username')
    new_email = request.form.get('email')
    new_company = request.form.get('company')

    user = User.query.get(id)
    company = Company.query.filter_by(name=new_company).first()

    if not user:
        return jsonify({'error': 'id does not match database entry'}), 400
    if match_email(new_email) is None:
        return jsonify({'error': 'invalid email'}), 400

    user.username = new_username
    user.email = new_email

    company.users.append(user)
    db.session.add(company)
    db.session.commit()

    return jsonify({'id': user.id, 'username': user.username, 'email': user.email, 'company': user.company.name})


@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):

    user = User.query.get(id)

    if not user:
        return jsonify({'error': 'id does not match database entry'}), 400

    db.session.delete(user)
    db.session.commit()

    return jsonify({'message': f'user {id} deleted'})


@app.route('/companies', methods=['GET'])
def get_companies():
    companies = Company.query.all()
    companies_jsonified = []

    for company in companies:
        companies_jsonified.append({'id': company.id, 'name': company.name})

    return jsonify({'companies': companies_jsonified})


if __name__ == '__main__':
    app.run(debug=True)
