import { waitTimeout } from "../utils/async";



export const guestApi = {

  signUp: async ({username, email, password, confirmedPass}) => {
    await waitTimeout(500);
    fetch("das/dsad", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
      })
    })  
  },

}