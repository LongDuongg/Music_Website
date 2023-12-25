import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { guestApi } from "../api/mock-api";
import { clocalStorage } from "../utils/localStorage";

export const Context = createContext();

export const ContextProvider = ({ children }) => {

  const loginUser = clocalStorage("loginUser");

  const navigate = useNavigate();

  const [auth, setAuth] = useState({ user: loginUser.get() });

  const signIn = async ({ username, password }) => {
    const user = await guestApi.signIn({ username, password });
    setAuth({ user });
    loginUser.set(user);
    return user;
  };

  const signOut = () => {
    setAuth(null);
    loginUser.set(null);
    navigate("/");
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