import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [product, setProduct] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser, product, setProduct }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }

  return context;
}
