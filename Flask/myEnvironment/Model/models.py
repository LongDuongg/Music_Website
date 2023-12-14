from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


class Playlist(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(100), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

  def __init__(self, title, user_id) :
    self.title = title
    self.user_id = user_id


class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(50), unique=True, nullable=False)
  password = db.Column(db.String(255), nullable=False)
  email = db.Column(db.String(100), unique=True, nullable=False)
  playLists = db.relationship('Playlist')
  
  def __init__(self, username, password, email) :
    self.username = username
    self.password = password
    self.email = email
    
    
class Song(db.Model):
  song_id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(255), nullable=False)
  artist = db.Column(db.String(255), nullable=False)
  duration = db.Column(db.Integer)
  release_date = db.Column(db.Date)
  genre = db.Column(db.String(50))
  
  def __init__(self, title, artist, duration, release_date, genre):
    self.title = title
    self.artist = artist
    self.duration = duration
    self.release_date = release_date
    self.genre = genre
    
    
    