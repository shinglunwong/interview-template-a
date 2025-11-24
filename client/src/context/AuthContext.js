import React, {
  createContext,
  useContext,
  useState
} from "react";
import { loginRequest } from "../api/authApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const login = async (email, password) => {
    const data = await loginRequest(email, password);
    setToken(data.token);
    localStorage.setItem("token", data.token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
