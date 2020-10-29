from app import app

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
  return jsonify({'username': user.username, 'email': user.email}), 201, 
