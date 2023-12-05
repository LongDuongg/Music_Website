from flask import Blueprint

song_views = Blueprint("song_views", __name__)

@song_views.route("/")
def song() :
  return "<h1>song</h1>"