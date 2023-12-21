from flask import Blueprint, render_template, request, redirect, url_for, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

from Model.models import db, User

auth = Blueprint("auth", __name__,template_folder="../../../React/src/components")

@auth.route('/sign-up', methods=['GET','POST'])
def sign_up():
  username = request.json['username']
  email = request.json['email']
  password = request.json['password']
  hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

  print("{}, {}, {}".format(username, email, hashed_password))
  new_user = User(username=username, password=hashed_password, email=email)
  
  db.session.add(new_user)
  db.session.commit()



@auth.route('/login', methods=['GET', 'POST'])
def login():                                     
  username = request.json['username']
  password = request.json['password']
  
  print("{}, {}".format(username, password))
  
  user = User.query.filter_by(username=username).first()

  print("user : {}".format(user.password))
  
  if user and check_password_hash(user.password, password) :
    return "true"

  return "false"
  
  
  


@auth.route('/logout', methods=['GET', 'POST'])
def logout():
  return "<h1>logout</h1>"