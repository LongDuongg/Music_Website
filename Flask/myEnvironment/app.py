from flask import Flask

from Model.models import db

from Controllers.song_views import song_views
from Controllers.user_views import user_views
from Auth.auth import auth

def create_app() :
  app = Flask(__name__)
  
  # Create database resource
  app.config.from_object('config')

  db.init_app(app)
  with app.app_context():
    db.create_all()
  
  # Register blueprint routes
  app.register_blueprint(user_views, url_prefix="/user")
  app.register_blueprint(song_views, url_prefix="/song")
  app.register_blueprint(auth, url_prefix="/auth")
  
  return app


if __name__ == "__main__" :
  app = create_app()
  app.run(port=80, debug=True)