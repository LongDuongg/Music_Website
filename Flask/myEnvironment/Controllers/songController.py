from flask import Blueprint, render_template, request, redirect, url_for
from sqlalchemy import or_
from Model.models import db, Song

songController = Blueprint("songController", __name__)

@songController.route("/")
def song() :
  songs = Song.query.all()
  return render_template('index.html', songs=songs)


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
  
  
@songController.route('/<int:song_id>/delete', methods=['GET', 'POST'])
def delete_song(song_id):
  song = Song.query.get(song_id)

  if request.method == 'POST':
    db.session.delete(song)
    db.session.commit()
    return redirect(url_for('view_songs'))

  return render_template('delete_song.html', song=song)


@songController.route('/<int:song_id>/edit', methods=['GET', 'POST'])
def edit_song(song_id):
  song = Song.query.get(song_id)

  if request.method == 'POST':
    song.title = request.form['title']
    song.artist = request.form['artist']
    song.duration = request.form['duration']
    song.release_date = request.form['release_date']
    song.genre = request.form['genre']

    db.session.commit()
    return redirect(url_for('view_song', song_id=song.song_id))

  return render_template('edit_song.html', song=song)


@songController.route('/search', methods=['GET', 'POST'])
def search():
  if request.method == 'POST':
    search_query = request.form['search_query']
    songs = Song.query.filter(or_(Song.title.ilike(f"%{search_query}%"), Song.artist.ilike(f"%{search_query}%"))).all()
    return render_template('search_results.html', songs=songs, search_query=search_query)

  return render_template('search.html')