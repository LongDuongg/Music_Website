from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(50), unique=True, nullable=False)
  password = db.Column(db.String(255), nullable=False)
  email = db.Column(db.String(100), unique=True, nullable=False)
  
  def __init__(self, username, password, email) :
    self.username = username
    self.password = password
    self.email = email
  
  