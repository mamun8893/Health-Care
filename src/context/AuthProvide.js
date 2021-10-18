import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

//Create Auth Contect

export const AuthContext = createContext();
const AuthProvide = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvide;
