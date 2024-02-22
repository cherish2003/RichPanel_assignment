import React, { useContext, useRef, useEffect, useState } from "react";
import { ConversationContext } from "../../context/ConversationContext";

export const Message = ({ message }) => {
  const { pageId } = useContext(ConversationContext);
  const [isNewThread, setIsNewThread] = useState(true);

  const fromId = message?.from?.id;
  const ToId = message?.to?.data[0].id;
  const Created_time = new Date(message?.created_time);

  const ref = useRef();

  useEffect(() => {
    const lastMessageTime = localStorage.getItem("lastMessageTime");
    if (
      !lastMessageTime ||
      Date.now() - lastMessageTime > 24 * 60 * 60 * 1000
    ) {
      setIsNewThread(true);
    } else {
      setIsNewThread(false);
    }

    localStorage.setItem("lastMessageTime", Date.now());
  }, []);

  return fromId != pageId ? (
    <div
      className={`flex  mb-5 ml-3 mt-2 items-start  mr-3 gap-5  relative ${
        isNewThread ? "border-t-2 pt-3 border-gray-500" : ""
      }`}
      ref={ref}
    >
      {isNewThread && (
        <div className="absolute top-0 left-0 right-0 text-center text-gray-500 text-xs">
          New Conversation Thread
        </div>
      )}
      <span className="absolute  left-0 bottom-0 text-[9px] text-slate-500 ">
        {Created_time.toString().slice(16, 21)}
      </span>
      <p className="bg-white py-3 px-5 rounded-md">{message.message}</p>
    </div>
  ) : (
    <div
      ref={ref}
      className={`flex  mb-5 ml-3 mt-2 items-start  mr-3 gap-5 flex-row-reverse relative ${
        isNewThread ? "border-t-2 pt-3 border-gray-500" : ""
      }`}
    >
      {isNewThread && (
        <div className="absolute top-0 left-0 right-0 text-center text-gray-500 text-xs">
          New Conversation Thread
        </div>
      )}
      <span className="absolute  right-0 bottom-0 text-[9px] text-slate-500 ">
        {Created_time.toString().slice(16, 21)}
      </span>
      <p className="bg-white py-3 px-5 rounded-md">{message.message}</p>
    </div>
  );
};
