import React, { createContext, useContext, useState, useEffect } from "react";
import { getPageinfo } from "../Api/getPageInfo";

export const ConversationContext = createContext();

export const ConversationProvider = ({ children }) => {
  const [chatUser, setChatUser] = useState({
    user_id: null,
    conversation_id: null,
    user_name: null,
    email: null,
  });

  const [userId, setUserId] = useState(null);
  const [pageId, setPageId] = useState(null);
  const [pageAccessToken, setPageAccessToken] = useState(null);
  const [AccessToken, setAccessToken] = useState(null);
  const [messageArray, setMessageArray] = useState([]);

  const contextValue = {
    userId,
    setUserId,
    pageId,
    AccessToken,
    setAccessToken,
    setPageId,
    pageAccessToken,
    setPageAccessToken,
    messageArray,
    setMessageArray,
    setChatUser,
    chatUser,
  };

  return (
    <ConversationContext.Provider value={contextValue}>
      {children}
    </ConversationContext.Provider>
  );
};
