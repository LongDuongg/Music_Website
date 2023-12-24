import { waitTimeout } from "../utils/async";
import { clocalStorage } from "../utils/localStorage";

export const userInfo = clocalStorage("userInfo")

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
        //confirmedPass: confirmedPass
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
      userInfo.set(data.user) 
    }) 
    .catch(error => console.log(error))
  },


  logout: () => {
    userInfo.set(null)
  }
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
}