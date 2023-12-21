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

}