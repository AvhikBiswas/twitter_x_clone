import React from "react";
import { MainLogin } from "./components/LoginComponents/MainLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";

const Login = () => {
  const CLIENT_ID:string = process.env.NEXT_PUBLIC_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="login">
        <MainLogin />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </GoogleOAuthProvider>
  );
};

export default Login;
