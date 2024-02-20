import React from "react";

export const DisconnectPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" flex rounded-2xl  p-5 items-center bg-[#f0f6ff] ">
        <div className="px-14 py-12 flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl lg:text-3xl text-gray-80000  ">
            Facebook Page Integration
          </h2>
          <button
            type="submit"
            className="bg-darkBlue px-10 rounded-md py-2 text-white mt-4"
          >
            Reply to messages
          </button>
        </div>
      </div>
    </div>
  );
};
