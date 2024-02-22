import React, { useContext, useState } from "react";
import { ConversationContext } from "../../context/ConversationContext";
import { sendMessage } from "../../Api/SendMessage";

export const Chatinput = () => {
  const [inpTxt, setInpTxt] = useState("");
  const { chatUser, pageAccessToken } = useContext(ConversationContext);
  const imgLoader = false;
  const handleKey = async (e) => {
    if (e.target.value !== "" && e.code == "Enter") {
      sendMessage(pageAccessToken, chatUser.user_id, inpTxt)
        .then((response) => {
          console.log("Message sent successfully:", response);
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
      setInpTxt("");
    }
  };
  return (
    <div className="p-3 h-14 bg-lightGray flex justify-between items-center relative ">
      <input
        type="text"
        name=""
        className="h-10 text-lg bg-white
       w-full border-none  rounded-lg text-center"
        placeholder={`Message ${chatUser?.name || "user"}`}
        onChange={(e) => setInpTxt(e.target.value)}
        value={inpTxt}
        onKeyDown={handleKey}
      />
    </div>
  );
};
