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
    .then( async (res) => {
      const data = await res.json();
      console.log(data);
      return data;
    }).catch((error) => console.log(error))
  },

}