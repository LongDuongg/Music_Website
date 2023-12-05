from flask import Blueprint, render_template, request, redirect, url_for
from werkzeug.security import generate_password_hash, check_password_hash

user_views = Blueprint("user_views", __name__)

@user_views.route('/')
def user():
  return "<h1>User</h1>"
