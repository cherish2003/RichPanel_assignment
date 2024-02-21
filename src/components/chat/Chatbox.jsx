import React from "react";
import { MessageBox } from "./MessageBox";
import { Chatinput } from "./Chatinput";

export const Chatbox = () => {
  return (
    <div className="w-1/2 bg-lightGray ">
      <div className="bg-white h-16 flex items-center justify-start border">
        <div className=" text-xl p-3 font-semibold ">
          Amit RG
          {/* {data.user?.displayName || dummytext} */}
        </div>
      </div>
      <MessageBox />
      <Chatinput />
    </div>
  );
};
