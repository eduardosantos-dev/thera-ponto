import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("thera_user");
    const storedToken = sessionStorage.getItem("thera_token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      api.defaults.headers.Authorization = `Bearer ${storedToken}`;
    }
  }, []);

  async function Login(props) {
    const response = await api.post("/Accounts", {
      userID: props.username,
      accessKey: props.password,
      grantType: "password",
    });

    const userObj = { name: response.data.name };
    setUser(userObj);

    api.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;

    sessionStorage.setItem("thera_user", JSON.stringify(userObj));
    sessionStorage.setItem("thera_token", response.data.accessToken);
  }

  function Logout() {
    setUser(null);

    sessionStorage.removeItem("thera_user");
    sessionStorage.removeItem("thera_token");
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: Boolean(user), user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
