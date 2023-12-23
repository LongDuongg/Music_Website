from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


song_playlist = db.Table('song_playlist',
  db.Column('song_id', db.Integer, db.ForeignKey('song.id'), primary_key=True),
  db.Column('playlist_id', db.Integer, db.ForeignKey('playlist.id'), primary_key=True)
)

class Playlist(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(100), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
  user = db.relationship('User', backref=db.backref('playlists', lazy='dynamic'))

  def __init__(self, title, user) :
    self.title = title
    self.user_id = user_id


class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(50), unique=True, nullable=False)
  password = db.Column(db.String(255), nullable=False)
  email = db.Column(db.String(100), unique=True, nullable=False)
  
  def __init__(self, username, password, email) :
    self.username = username
    self.password = password
    self.email = email
    
    
class Song(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(255), nullable=False)
  artist = db.Column(db.String(255), nullable=False)
  url = db.Column(db.Text)
  release_date = db.Column(db.Date)
  genre = db.Column(db.String(50))
  
  def __init__(self, title, artist, url, release_date, genre):
    self.title = title
    self.artist = artist
    self.url = url
    self.release_date = release_date
    self.genre = genre
    
    
    