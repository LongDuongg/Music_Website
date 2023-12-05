from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

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