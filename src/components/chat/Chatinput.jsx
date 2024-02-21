import React from "react";

export const Chatinput = () => {
  const imgLoader = false;
  return (
    <div className="p-3 h-14 bg-lightGray flex justify-between items-center relative ">
      <input
        type="text"
        name=""
        className="h-10 text-xl bg-white
       w-full border-none text-slate-200 text-start  rounded-lg"
        placeholder="Message"
        // onChange={(e) => setText(e.target.value)}
        // value={text}
        // onKeyDown={handleKey}
      />
      {/* <div className=" flex items-center gap-3  ">
        <button
          type="submit"
          className="p-3 rounded-lg text-slate-300 bg-slate-800 focus:outline-none"
          //   onClick={handleSubmit}
        >
          Send
        </button>
      </div> */}
    </div>
  );
};
