from flask import Blueprint, render_template, request, redirect, url_for, jsonify, json
from sqlalchemy import or_
from Model.models import db, Song

songController = Blueprint("songController", __name__)


@songController.route('/add_song', methods=['GET', 'POST'])
def add_song():
  title = request.json['title']
  artist = request.json['artist']
  url = request.json['url']
  release_date = request.json['release_date']
  genre = request.json['genre']

  print({title, artist, url, release_date, genre})

  new_song = Song(title=title, artist=artist, url=url, release_date=release_date, genre=genre)
  db.session.add(new_song)
  db.session.commit()
  
  return "Ok"
  
  
@songController.route('/delete_song', methods=['POST'])
def delete_song():
  data = json.loads(request.data)
  song_id = data['songID']
  print(song_id)
  song = Song.query.get(song_id)

  db.session.delete(song)
  db.session.commit()

  return "Ok"


@songController.route('/edit_song/<int:id>', methods=['GET', 'POST'])
def edit_song(id):
  
  song = Song.query.get(id)

  song.title = request.json['title']
  song.artist = request.json['artist']
  song.genre = request.json['genre']

  db.session.commit()
  return "OK"


@songController.route('/select_song', methods=['GET', 'POST'])
def search():
  id = request.json['id']
  print(id)
  song = Song.query.filter_by(id=id).first()
  
  return jsonify({
    "id": song.id,
    "title": song.title,
    "artist": song.artist,
    "genre": song.genre
  })


@songController.route('/get_songs')
def getAllSongs() :
  songs = Song.query.all()
  list = []
  
  for song in songs :
    obj = {
      "id": song.id,
      "title": song.title,
      "artist": song.artist,
      "genre": song.genre,
    }
    list.append(obj)
    
  # print(list)

  return list
   