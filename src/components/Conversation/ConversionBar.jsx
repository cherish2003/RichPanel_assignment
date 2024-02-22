import React, { useContext, useState, useEffect } from "react";
import { ConversionUser } from "./ConversionUser";
import { CiTextAlignLeft } from "react-icons/ci";
import { getPageinfo } from "/src/Api/getPageInfo.js";
import { ConversationContext } from "../../context/ConversationContext";
import { getConverstions } from "../../Api/getConverstions";
import { getMessagesid } from "../../Api/getMessagesinfo";

export const ConversionBar = () => {
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState([]);
  const [msgIds, setMsgIds] = useState({});
  const {
    userId,
    AccessToken,
    setPageId,
    setPageAccessToken,
    pageAccessToken,
    pageId,
  } = useContext(ConversationContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const convData = await getConverstions(pageId, pageAccessToken);
        console.log(convData);
        setConversations(convData.data.data);
        setLoading(false);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [pageId]);

  useEffect(() => {
    const fetchMsgIds = async () => {
      try {
        const msgIdsData = {};
        for (const conversation of conversations) {
          const res = await getMessagesid(conversation.id, pageAccessToken);
          msgIdsData[conversation.id] = res.data.messages.data[0];
        }
        setMsgIds(msgIdsData);
      } catch (error) {
        console.log(error);
      }
    };
    if (conversations) {
      fetchMsgIds();
    }
  }, [conversations, pageAccessToken]);

  return (
    <>
      {loading ? (
        <div class=" w-1/4 flex space-x-2 justify-center items-center bg-white h-screen ">
          <span class="sr-only">Loading...</span>
          <div class="h-4 w-4 bg-darkBlue rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div class="h-4 w-4 bg-darkBlue rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div class="h-4 w-4 bg-darkBlue rounded-full animate-bounce"></div>
        </div>
      ) : (
        <div className="w-1/4  bg-white overflow-hidden">
          <div className="h-16 border-y-2 font-semibold flex justify-start items-center text-xl  bg-white">
            <CiTextAlignLeft className="mr-2 ml-2" />
            Conversations
          </div>
          <div className=" h-screen w-full scrollBarRem overflow-x-scroll no-scrollbar scroll-smooth flex flex-col ">
            {conversations &&
              conversations.map((conversation) => (
                <ConversionUser
                  key={conversation.id}
                  id={conversation.id}
                  msgIds={msgIds[conversation.id]}
                  pageAccessToken={pageAccessToken}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};
