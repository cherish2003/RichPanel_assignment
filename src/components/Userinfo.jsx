import React from "react";

export const Userinfo = () => {
  return (
    <div className="w-1/4 h-full">
      <div className="h-2/5  w-full flex justify-center items-center">
        <div class="flex flex-col items-center  ">
          <img
            class="w-16 h-16 rounded-full border-2 border-white"
            src="https://pbs.twimg.com/profile_images/1333896976602193922/MtWztkxt_400x400.jpg"
          />

          <div class="ms-3 ">
            <h3 class="font-semibold text-gray-800">Mark Wanner</h3>
            <p class="text-sm font-medium ">mark@gmail.com</p>
          </div>
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
        <div class="relative  mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72 h-[250px] ">
          <div class="p-10 h-full">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Customer details
            </h5>
            <div className="flex justify-between">
              {" "}
              <label htmlFor="email" className="text-slate-300">
                Email:
              </label>
              <p name="email" className="ml-4">
                {" "}
                saicherish90@gmail.com
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
