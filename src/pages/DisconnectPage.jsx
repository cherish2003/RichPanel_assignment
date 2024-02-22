import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const DisconnectPage = () => {
  const navigate = useNavigate();
  const { setTempToken } = useContext(UserContext);
  const disconnectFromFacebook = () => {
    setTempToken("");
    navigate("/", { replace: true });
  };
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
            onClick={() => {
              navigate("/agentpage", { replace: true });
            }}
          >
            Reply to messages
          </button>
          <button
            type="submit"
            className="bg-red-700 px-10 rounded-md py-2 text-white mt-4"
            onClick={disconnectFromFacebook}
          >
            Disconnect User
          </button>
        </div>
      </div>
    </div>
  );
};
