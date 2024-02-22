import React, { useState, useEffect, useContext } from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export const Integrationpage = () => {
  const [token, setToken] = useState("");
  const [LongToken, setLongToken] = useState(null);
  const navigate = useNavigate();
  const { setTempToken } = useContext(UserContext);
  useEffect(() => {
    if (token) {
      setTempToken(token);
      navigate("/disconnectuser", { replace: true });
    }
  }, [token]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" flex rounded-2xl  p-5 items-center bg-[#f0f6ff] ">
        <div className="px-14 py-12 flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl lg:text-3xl text-gray-80000  ">
            Facebook Page Integration
          </h2>
          <LoginSocialFacebook
            appId="1834245080330874"
            onResolve={(response) => setToken(response)}
            onReject={(error) => console.log(error)}
            scope="pages_show_list, pages_messaging, pages_read_user_content, read_page_mailboxes, pages_read_engagement, pages_manage_engagement"
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
        </div>
      </div>
    </div>
  );
};
