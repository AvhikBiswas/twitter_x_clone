import React from "react";
import { Main_login } from "./components/LoginComponents/Main_login";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="login">
        <Main_login />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
