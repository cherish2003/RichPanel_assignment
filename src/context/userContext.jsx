import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const initialToken = JSON.parse(localStorage.getItem("usertoken"));

  const [usertoken, setUsertoken] = useState(initialToken);

  useEffect(() => {
    localStorage.setItem("usertoken", JSON.stringify(usertoken));
  }, [usertoken]);

  const setTempToken = (token) => {
    setUsertoken(token);
  };

  return (
    <UserContext.Provider value={{ usertoken, setTempToken }}>
      {children}
    </UserContext.Provider>
  );
};
