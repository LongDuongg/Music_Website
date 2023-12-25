import { waitTimeout } from "../utils/async";

export const guestApi = {

  signUp: async ({username, email, password}) => {
    await waitTimeout(500);
    fetch("/auth/sign-up", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error))
  },

  login: async ({username, password}) => {
    await waitTimeout(500);
    fetch("/auth/login", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.user)
    }) 
    .catch(error => console.log(error))
  },
}

export const songApi = {
  addSong : async ({title, artist, url, release_date, genre}) => {
    await waitTimeout(500);
    fetch("/song/add_song", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        artist: artist,
        url: url,
        release_date: release_date,
        genre: genre        
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error))
  },


  editSong : async ({title, artist, genre}) => {
    await waitTimeout(500);
    fetch("/song/edit_song", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        artist: artist,
        genre: genre        
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error))
  },

  deleteSong: async (songID) => {
    await waitTimeout(500);
    fetch("/song/delete_song", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        songID: songID
      })
    })
    .then(response => {
      window.location.href = "/album-detail";
    })
  },

  getSongByID: async (id) => {
    await waitTimeout(500);
    fetch("/song/select_song", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id
      })
    })
    .then(response => response.json())
    .then(data => {
      // console.log(data)
    })
    .catch(error => console.log(error))
  }
}