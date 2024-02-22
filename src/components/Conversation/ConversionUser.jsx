import React, { useContext, useEffect, useState } from "react";
import { getMessagesdata, getMessagesid } from "../../Api/getMessagesinfo";
import { ConversationContext } from "../../context/ConversationContext";

export const ConversionUser = ({ id, time, msgIds, pageAccessToken }) => {
  const [usrinfo, setUsrinfo] = useState(null);
  console.log(usrinfo);
  const Created_time = new Date(usrinfo?.created_time);
  const { setChatUser, pageId } = useContext(ConversationContext);
  useEffect(() => {
    const getMsgids = async () => {
      try {
        const res = await getMessagesdata(msgIds.id, pageAccessToken);
        setUsrinfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (msgIds) {
      setTimeout(getMsgids(), 2000);
    }
  }, [msgIds]);

  const fromId = usrinfo?.from?.id;
  const ToId = usrinfo?.to?.data[0].id;

  return (
    <div
      className=" flex items-center  gap-3 p-3  transition ease-in-out  hover:bg-lavendar h-32 w-full  flex-row relative "
      onClick={() =>
        setChatUser({
          user_id: fromId != pageId ? usrinfo?.from?.id : ToId,
          conversation_id: id,
          name:
            fromId != pageId ? usrinfo?.from?.name : usrinfo?.to?.data[0].name,
          email:
            fromId != pageId
              ? usrinfo?.from?.email
              : usrinfo?.to?.data[0].email,
        })
      }
    >
      <div className="absolute right-3 bottom-2 text-xs text-slate-500">
        {`Last online at ${Created_time.toString().slice(16, 21)}`}
      </div>
      <div className=" text-lg font-semibold  ">
        {fromId != pageId ? usrinfo?.from?.name : usrinfo?.to?.data[0].name}
        <p className="invisible hidden md:visible  md:block text-xs opacity-70 text-slate-80000 ">
          {usrinfo?.message}
        </p>
      </div>
    </div>
  );
};
