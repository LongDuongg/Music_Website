from flask import Blueprint, render_template, request, redirect, url_for
from werkzeug.security import generate_password_hash, check_password_hash

from Model.models import db, User

auth = Blueprint("auth", __name__)

@auth.route('/sign-up', methods=['POST'])
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
  if request.method == 'POST':
    username = request.form['username']
    password = request.form['password']
    
    user = User.query.filter_by(username=username).first()

    if user :
      if username == user.username and check_password_hash(user.password, password) :
        return redirect(url_for('user_views.user'))
      else :
        print("invalid username or password")
    else :
      print("you dont have an account yet")
      
  return render_template('login.html')
  


@auth.route('/logout', methods=['GET', 'POST'])
def logout():
  return "<h1>logout</h1>"