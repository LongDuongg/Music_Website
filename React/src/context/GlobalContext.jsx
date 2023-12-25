import { useState, createContext } from "react";
import { guestApi } from "../api/mock-api";
import { clocalStorage } from "../utils/localStorage";

export const Context = createContext();

export const ContextProvider = ({ children }) => {

  const loginUser = clocalStorage("loginUser");

  const [auth, setAuth] = useState();

  const signIn = async ({ username, password }) => {
    await fetch("/auth/login", {
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
    .then(async (res) => {
      return await res.json().then((data) => {
        console.log(data);
        setAuth(data);
        loginUser.set(data);
      })
    }).catch((error) => console.log(error))
  };

  const signOut = () => {
    setAuth(null);
    loginUser.set(null);
  };

  return (
    <Context.Provider
      value={{
        user: auth?.user,
        signIn,
        signOut,

      }}
    >
      {children}
    </Context.Provider>
  );
};