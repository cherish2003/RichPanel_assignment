import React from "react";

export const Navbar = ({ login, signup, loginVal, signupVal }) => {
  return (
    <div className=" h-[10%] bg-lavendar w-full flex items-center justify-center">
      <div className="flex h-full w-full  justify-between items-center">
        <div className="text-2xl font-semibold font-sans ml-4">HelpSpot</div>
        <div className="flex w-1/4  justify-around items-center">
          <button
            class="px-2  flex gap-2rounded-lg text-slate-700 hover:underline
           hover:text-slate-900 transition hover:scale-95 duration-150 text-lg"
            onClick={!loginVal && login}
          >
            Login
          </button>
          <button
            class="px-2  flex gap-2rounded-lg text-slate-700 hover:underline
           hover:text-slate-900 transition hover:scale-95 duration-150 text-lg"
            onClick={!signupVal && signup}
          >
            Signup
          </button>
          <button
            class="px-2  flex gap-2rounded-lg text-slate-700 hover:underline
           hover:text-slate-900 transition hover:scale-95 duration-150 text-lg"
          >
            About
          </button>
        </div>
      </div>
    </div>
  );
};
