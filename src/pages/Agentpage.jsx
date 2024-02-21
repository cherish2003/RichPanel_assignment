import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { ConversionBar } from "../components/Conversation/ConversionBar";
import { Chatbox } from "../components/chat/Chatbox";
import { Userinfo } from "../components/Userinfo";

export const Agentpage = () => {
  return (
    <div className="w-full flex h-screen">
      <Sidebar />
      <ConversionBar />
      <Chatbox />
      <Userinfo />
    </div>
  );
};
