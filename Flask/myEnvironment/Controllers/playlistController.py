from flask import Flask, Blueprint,render_template, request, redirect, url_for,flash

from Model.models import db, Song, Playlist

playlistController = Blueprint("playlistController", __name__)

@playlistController.route('/view_playlist/<int:playlist_id>')
def view_playlist(playlist_id):
  playlist = Playlist.query.get(playlist_id)

  if playlist:
    songs = playlist.songs.all() 
    return render_template('view_playlist.html', playlist=playlist, songs=songs)

  return "Danh sách phát không tồn tại, vui lòng xem lại" 


@playlistController.route('/add_song_to_playlist/<int:song_id>/<int:playlist_id>', methods=['POST'])
def add_song_to_playlist(song_id, playlist_id):
  song = Song.query.get(song_id)
  playlist = Playlist.query.get(playlist_id)

  if song and playlist:
    if song not in playlist.songs:
      playlist.songs.append(song)
      db.session.commit()

  return redirect(url_for('view_playlist', playlist_id=playlist_id))
  
  
@playlistController.route('/remove_song_from_playlist/<int:song_id>/<int:playlist_id>', methods=['POST'])
def remove_song_from_playlist(song_id, playlist_id):
  song = Song.query.get(song_id)
  playlist = Playlist.query.get(playlist_id)

  if song and playlist:
    if song in playlist.songs:
      playlist.songs.remove(song)
      db.session.commit()

  return redirect(url_for('view_playlist', playlist_id=playlist_id))
  
  
@playlistController.route('/edit_song/<int:song_id>', methods=['GET', 'POST'])
def edit_song(song_id):
  song = Song.query.get(song_id)

  if request.method == 'POST':
    song.title = request.form['title']
    song.artist = request.form['artist']
    song.duration = request.form['duration']
    song.release_date = request.form['release_date']
    song.genre = request.form['genre']

    db.session.commit()
    return redirect(url_for('view_playlist', playlist_id=song.playlist.id))  # Redirect đến danh sách phát của bài hát

  return render_template('edit_song.html', song=song)