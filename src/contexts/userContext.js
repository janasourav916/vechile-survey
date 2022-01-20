import { createContext } from "react";
import users from "../data/users.json";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};
