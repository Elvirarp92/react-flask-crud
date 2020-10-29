from app import app

class user(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(32), nullable=False)
  email = db.Column(db.String(120), unique=True, nullable=False)
  password = db.Column(db.String(512), nullable=False)
  company_id = db.Column(db.Integer, db.ForeignKey('company.id'), nullable=False)

class company(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(80), nullable=False)
  users = db.relationship('User', backref='company', lazy=True)