import React, { useContext, useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { ConversionBar } from "../components/Conversation/ConversionBar";
import { Chatbox } from "../components/chat/Chatbox";
import { Userinfo } from "../components/Userinfo";
import { UserContext } from "../context/userContext";
import { ConversationContext } from "../context/ConversationContext";
import { getPageinfo } from "../Api/getPageInfo";

export const Agentpage = () => {
  const { usertoken } = useContext(UserContext);
  const { setUserId, setAccessToken, setPageId, setPageAccessToken } =
    useContext(ConversationContext);
  useEffect(() => {
    const getPageid = async () => {
      try {
        const newData = await getPageinfo(
          usertoken?.data.id,
          usertoken?.data.accessToken
        );
        console.log(newData);
        setPageId(newData?.data[0].id);
        setPageAccessToken(newData?.data[0].access_token);
      } catch (error) {
        console.log(error);
      }
    };
    setAccessToken(usertoken?.data.accessToken);
    setUserId(usertoken?.data.id);
    getPageid();
  }, [usertoken]);
  return (
    <div className="w-full flex h-screen">
      <Sidebar />
      <ConversionBar />
      <Chatbox />
      <Userinfo />
    </div>
  );
};
