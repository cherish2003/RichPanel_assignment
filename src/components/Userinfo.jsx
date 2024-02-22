import React, { useContext } from "react";
import { ConversationContext } from "../context/ConversationContext";

export const Userinfo = () => {
  const { chatUser } = useContext(ConversationContext);

  return (
    <div className="w-1/4 h-full">
      <div className="h-2/5  w-full flex justify-center items-center">
        <div class="flex flex-col items-center justify-center  ">
          <h3 class="font-semibold text-gray-800">{chatUser?.name}</h3>
          <img
            class="inline object-cover w-20 h-20 rounded-full"
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Profile image"
          />
          <div class="flex items-center space-x-1 text-sm px-2 ">
            <div
              style={{ width: "0.4rem", height: "0.4rem" }}
              class="bg-green-800 rounded-full"
            ></div>
            <div>online</div>
          </div>
        </div>
      </div>
      <div className="bg-lavendar h-3/5 flex items-start justify-center ">
        <div class="relative  mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 h-[250px] ">
          <div class="p-10 h-full">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Customer details
            </h5>

            <div className="flex justify-between">
              {" "}
              <label htmlFor="email" className="text-slate-500">
                Username:
              </label>
              <p name="email" className="ml-4">
                {" "}
                {chatUser?.name}
              </p>
            </div>
            <div className="flex justify-between">
              {" "}
              <label htmlFor="email" className="text-slate-500">
                Userid:
              </label>
              <p name="email" className="ml-4">
                {" "}
                {chatUser?.user_id}
              </p>
            </div>
            <div className="flex justify-between ">
              {" "}
              <label htmlFor="email" className="text-slate-500">
                Conversation id
              </label>
              <p name="email" className="ml-4 text-sm">
                {" "}
                {chatUser?.conversation_id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
//   Because it's about motivating the doers. Because I'm here to follow my
//   dreams and inspire others.
// </p>;
