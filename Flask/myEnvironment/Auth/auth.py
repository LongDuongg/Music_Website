from flask import Blueprint, render_template, request, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash

from User.user_models import User
from User.user_models import db

auth = Blueprint("auth", __name__, template_folder="templates")

@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
  if request.method == 'POST':
    username = request.form['username']
    password = request.form['password']
    email = request.form['email']

    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

    new_user = User(username=username, password=hashed_password, email=email)
    
    db.session.add(new_user)
    db.session.commit()

    return redirect(url_for('auth.login'))
  
  return render_template('sign-up.html')


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