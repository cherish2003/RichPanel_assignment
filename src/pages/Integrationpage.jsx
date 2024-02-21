import React, { useState } from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
export const Integrationpage = () => {
  const [token, setToken] = useState(null);
  console.log(token);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" flex rounded-2xl  p-5 items-center bg-[#f0f6ff] ">
        <div className="px-14 py-12 flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl lg:text-3xl text-gray-80000  ">
            Facebook Page Integration
          </h2>
          <LoginSocialFacebook
            appId="358019843739999"
            onResolve={(response) => setToken(response)}
            onReject={(error) => console.log(error)}
            scope="pages_show_list, pages_messaging, pages_read_user_content, read_page_mailboxes, pages_read_engagement, pages_manage_engagement"
            // scope="pages_messaging,pages_read_user_content"

            // onLogoutSuccess={(data) => console.log(data)}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
        </div>
      </div>
    </div>
  );
};
