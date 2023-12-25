from flask import Flask,render_template, request, redirect, url_for,flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import or_
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/music'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'your_secret_key'
db = SQLAlchemy(app)
class Song(db.Model):
    song_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    artist = db.Column(db.String(255), nullable=False)
    duration = db.Column(db.Integer)
    release_date = db.Column(db.Date)
    genre = db.Column(db.String(50))
@app.route('/')
def index():
    songs = Song.query.all()
    return render_template('index.html', songs=songs)

@app.route('/add_song', methods=['GET', 'POST'])
def add_song():
    if request.method == 'POST':
        title = request.form['title']
        artist = request.form['artist']
        duration = request.form['duration']
        release_date = request.form['release_date']
        genre = request.form['genre']

        new_song = Song(title=title, artist=artist, duration=duration, release_date=release_date, genre=genre)
        db.session.add(new_song)
        db.session.commit()

        return redirect(url_for('view_songs'))

    return render_template('add_song.html')
@app.route('/song/<int:song_id>/delete', methods=['GET', 'POST'])
def delete_song(song_id):
    song = Song.query.get(song_id)

    if request.method == 'POST':
        db.session.delete(song)
        db.session.commit()
        return redirect(url_for('view_songs'))

    return render_template('delete_song.html', song=song)
from flask import render_template, request, redirect, url_for

@app.route('/song/<int:song_id>/edit', methods=['GET', 'POST'])
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

@app.route('/search', methods=['GET', 'POST'])
def search():
    if request.method == 'POST':
        search_query = request.form['search_query']
        songs = Song.query.filter(or_(Song.title.ilike(f"%{search_query}%"), Song.artist.ilike(f"%{search_query}%"))).all()
        return render_template('search_results.html', songs=songs, search_query=search_query)

    return render_template('search.html')