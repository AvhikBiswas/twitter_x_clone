import React from "react";
import { MainLogin } from "./components/LoginComponents/MainLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="login">
        <MainLogin />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
