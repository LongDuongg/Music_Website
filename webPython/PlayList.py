from flask import Flask,render_template, request, redirect, url_for,flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import or_
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/music'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'your_secret_key'
db = SQLAlchemy(app)
song_playlist = db.Table('song_playlist',
    db.Column('song_id', db.Integer, db.ForeignKey('song.id'), primary_key=True),
    db.Column('playlist_id', db.Integer, db.ForeignKey('playlist.id'), primary_key=True)
)

class Song(db.Model):
    song_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    artist = db.Column(db.String(255), nullable=False)
    duration = db.Column(db.Integer)
    release_date = db.Column(db.Date)
    genre = db.Column(db.String(50))
class Playlist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('playlists', lazy='dynamic'))
@app.route('/view_playlist/<int:playlist_id>')
def view_playlist(playlist_id):
    playlist = Playlist.query.get(playlist_id)

    if playlist:
        songs = playlist.songs.all() 
        return render_template('view_playlist.html', playlist=playlist, songs=songs)

    return "Danh sách phát không tồn tại, vui lòng xem lại" 

@app.route('/add_song_to_playlist/<int:song_id>/<int:playlist_id>', methods=['POST'])
def add_song_to_playlist(song_id, playlist_id):
    song = Song.query.get(song_id)
    playlist = Playlist.query.get(playlist_id)

    if song and playlist:
        if song not in playlist.songs:
            playlist.songs.append(song)
            db.session.commit()

    return redirect(url_for('view_playlist', playlist_id=playlist_id))
@app.route('/remove_song_from_playlist/<int:song_id>/<int:playlist_id>', methods=['POST'])
def remove_song_from_playlist(song_id, playlist_id):
    song = Song.query.get(song_id)
    playlist = Playlist.query.get(playlist_id)

    if song and playlist:
        if song in playlist.songs:
            playlist.songs.remove(song)
            db.session.commit()

    return redirect(url_for('view_playlist', playlist_id=playlist_id))
@app.route('/edit_song/<int:song_id>', methods=['GET', 'POST'])
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

