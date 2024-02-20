import React, { useState } from "react";
import { Login } from "./Loginpage";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Signup } from "./Signupage";

export const Home = () => {
  const [loginPage, setloginPage] = useState(true);
  const [loginanimation, setloginanimation] = useState(true);
  const [loginDisplay, setloginDisplay] = useState(true);

  const [signupanimation, setSignupanimation] = useState(false);
  const [signupPage, setsignupPage] = useState(false);
  const [signupDisplay, setsignupDisplay] = useState(false);

  //timeout to attain the animation
  const SignupToggle = () => {
    setloginanimation(false);
    setTimeout(() => {
      setloginDisplay(false);
      setloginPage(false);
    }, 1000);
    setsignupDisplay(false);
    setsignupPage(true);
    setTimeout(() => {
      setsignupDisplay(true);
      setSignupanimation(true);
    }, 1200);
  };

  const LoginToggle = () => {
    setSignupanimation(false);
    setTimeout(() => {
      setsignupDisplay(false);
      setsignupPage(false);
    }, 1000);
    setloginDisplay(false);
    setloginPage(true);
    setTimeout(() => {
      setloginDisplay(true);
      setloginanimation(true);
    }, 1000);
  };

  return (
    <div className="h-screen scrollBarRem">
      <Navbar
        login={LoginToggle}
        signup={SignupToggle}
        loginVal={loginPage}
        signupVal={signupPage}
      />
      {loginPage ? (
        <Login
          loginDisplay={loginDisplay}
          loginanimation={loginanimation}
          signup={SignupToggle}
        />
      ) : null}
      {signupPage ? (
        <Signup
          signupanimation={signupanimation}
          signupDisplay={signupDisplay}
          login={LoginToggle}
        />
      ) : null}
      <Footer />
    </div>
  );
};
