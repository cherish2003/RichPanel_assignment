import React from "react";
import Richpanel from "../assets/Richpanel.svg";

export const Footer = () => {
  return (
    <div className=" h-[10%] w-full flex items-center justify-center fixed bottom-1">
      <div className="flex h-full w-full  justify-between items-center">
        <div className="text-sm  font-sans ml-4">
          Copyright@2024 - All Right Reserved{" "}
        </div>
        <div className="flex font-semibold mr-4">
          <p className="text-lg"> A Product of</p>
          <img src={Richpanel} className="ml-2" alt="" />
        </div>
      </div>
    </div>
  );
};
