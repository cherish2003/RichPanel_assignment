import React, { useContext } from "react";
import { FaInbox } from "react-icons/fa";
import { ConversationContext } from "../context/ConversationContext";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const { pageId } = useContext(ConversationContext);
  return (
    <aside class="flex flex-col items-center w-20 h-screen py-8 bg-darkBlue">
      <nav class="flex flex-col flex-1 space-y-6 w-full">
        <div className="group hover:bg-white w-full flex justify-center items-center h-20 ">
          <FaInbox
            size={30}
            className="text-white  group-focus:bg-white group-hover:text-darkBlue "
          />
        </div>
      </nav>
      <div
        className="p-1.5 text-gray-700 focus:outline-nones transition-colors
      duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800
      hover:bg-gray-100 mb-4"
        src="https://icons8.com/icon/86311/export"
        alt=""
        onClick={() => {
          navigate("/disconnectuser", { replace: true });
        }}
      >
        👋
      </div>

      <a href="#">
        <img
          class="object-cover w-8 h-8 rounded-full"
          src={`https://graph.facebook.com/${pageId}/picture`}
          alt=""
        />
      </a>
    </aside>
  );
};
