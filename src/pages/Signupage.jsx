import React from "react";
import { motion } from "framer-motion";

export const Signup = ({ signupanimation, signupDisplay, login }) => {
  return (
    <div
      className={`h-4/5  ${
        !signupDisplay ? "hidden" : "flex"
      }  flex-col sm:flex-row `}
    >
      <motion.div
        className="  pl-10 h-full font-semibold break text-8xl w-1/2 tracking-tight flex justify-center flex-wrap items-center text-black "
        variants={{
          hidden: {
            opacity: 0,
            x: -125,
          },
          visible: { display: "flex", opacity: 1, x: 0 },
        }}
        animate={signupanimation ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Handle Volume Effectivly, Collaborate, Respond Seamlessly
      </motion.div>
      <motion.div
        className=" flex items-center justify-center w-1/2  mt-10"
        variants={{
          hidden: { opacity: 0, x: 120 },
          visible: { opacity: 1, x: 0 },
        }}
        animate={signupanimation ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className=" flex rounded-2xl  p-5 items-center bg-[#f0f6ff] ">
          <div className="px-14 py-12">
            <h2 className="font-bold text-2xl lg:text-3xl text-gray-80000  ">
              Sign up
            </h2>

            <form className="flex flex-col gap-4 mt-5">
              <div className=" flex flex-col  mt-1 w-full">
                <label
                  for="username"
                  class="text-sm font-medium text-gray-900 mb-3 w-full"
                >
                  Username
                </label>
                <input
                  className="p-2 rounded-md border"
                  type="text"
                  name="username"
                  placeholder="Email"
                />
                <label
                  for="email"
                  class="text-sm font-medium text-gray-900 mb-3 w-full"
                >
                  Email
                </label>
                <input
                  className="p-2 rounded-md border"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="text-sm font-medium text-gray-900 w-full"
                >
                  Password
                </label>
                <div className="relative">
                  {" "}
                  <input
                    className="p-2 rounded-md border w-full mt-2"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button className=" bg-darkBlue text-white rounded-lg border-2 border-white px-6 py-3 font-semibold ">
                Login
              </button>
            </form>

            <div className="mt-3 text-xs flex justify-around items-center text-black ">
              <p>Already have a account ?</p>
              <span
                className="text-darkBlue text-sm cursor-pointer"
                onClick={login}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
