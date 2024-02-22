import React, { useContext, useEffect, useState } from "react";
import { MessageBox } from "./MessageBox";
import { Chatinput } from "./Chatinput";
import { ConversationContext } from "../../context/ConversationContext";
import { getMessagesid } from "../../Api/getMessagesinfo";

export const Chatbox = () => {
  const { chatUser, pageAccessToken } = useContext(ConversationContext);
  const [Messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchNewMessages = async () => {
      try {
        if (chatUser) {
          const newMessages = await getMessagesid(
            chatUser.conversation_id,
            pageAccessToken
          );
          console.log(newMessages);
          setMessages(newMessages.data?.messages?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    console.log(Messages);
    const interval = setInterval(fetchNewMessages, 10000);

    return () => clearInterval(interval);
  }, [chatUser]);

  console.log(chatUser);
  return (
    <div className="w-1/2 bg-lightGray ">
      <div className="bg-white h-16 flex items-center justify-start border">
        <div className=" text-xl p-3 font-semibold ">
          {chatUser ? chatUser.name : "Select User"}
        </div>
        
      </div>
      <MessageBox Messages={Messages} />
      <Chatinput />
    </div>
  );
};
