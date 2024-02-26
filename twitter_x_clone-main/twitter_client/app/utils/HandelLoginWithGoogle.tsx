"use client";

import { graphqlClient } from "@/clients/api";
import { VERIFY_AUTH_TOKEN_QUERY } from "@/graphql/quary/user";
import { CredentialResponse } from "@react-oauth/google";
import toast from "react-hot-toast";

export async function HandelLoginWithGoogle(cred: CredentialResponse) {
  const credential = cred.credential;
  if (!credential) {
    throw new Error("Invalid Credential");
  }
  const { verifyAuthToken } = await graphqlClient.request(
    VERIFY_AUTH_TOKEN_QUERY,
    {
      token: credential,
    }
  );
  if (verifyAuthToken) {
    console.log(verifyAuthToken);
    toast.success("Verified Successfully");
    return verifyAuthToken;
  }
  throw new Error("Somthing Went Wrong");
}
