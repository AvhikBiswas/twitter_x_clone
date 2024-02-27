import { graphqlClient } from "@/clients/api";
import { VERIFY_AUTH_TOKEN_QUERY } from "@/graphql/quary/user";
import { CredentialResponse } from "@react-oauth/google";
import toast from "react-hot-toast";

export async function HandelLoginWithGoogle(cred: CredentialResponse) {
  try {
    if (!cred || !cred.credential) {
      throw new Error("Invalid Credential");
    }

    const { credential } = cred;
    console.log("Credential is ->", credential);

    const { verifyAuthToken } = await graphqlClient.request(
      VERIFY_AUTH_TOKEN_QUERY,
      {
        token: credential,
      }
    );

    if (verifyAuthToken) {
      console.log("Verified Successfully:", verifyAuthToken);
      toast.success("Verified Successfully");
      return verifyAuthToken;
    } else {
      throw new Error("Token verification failed");
    }
  } catch (err) {
    console.error("Error handling Google login:", err);
    toast.error("An error occurred while verifying the token");
  }
}
