import React from "react";
import { ConversionUser } from "./ConversionUser";
import { CiTextAlignLeft } from "react-icons/ci";

export const ConversionBar = () => {
  return (
    <div className="w-1/4 h-screen bg-white scrollBarRem">
      <div className="h-16  border-y-2 font-semibold flex justify-start items-center text-xl">
        <CiTextAlignLeft className="mr-2 ml-2" />
        Conversations
      </div>
      <div className=" w-full scrollBarRem overflow-x-scroll no-scrollbar scroll-smooth flex flex-col ">
        <ConversionUser />
        <ConversionUser />
        <ConversionUser />
      </div>
    </div>
  );
};
