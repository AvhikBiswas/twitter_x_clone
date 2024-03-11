"use client";

import React, { useCallback, useEffect, useState } from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import Loading from "./loading";
import { HandelLoginWithGoogle } from "@/app/utils/HandelLoginWithGoogle";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export const MainLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const queryClient = useQueryClient();
  const { user } = useCurrentUser();

  useEffect(() => {
    const checkAuthentication = async () => {
      const authToken = window.localStorage.getItem("_Autherization");
      if (!authToken || authToken == undefined) {
        return null;
      }
      if (user?.id) {
        router.push("/dashboard/home");
        toast.success("Login Success");
      } else {
        router.push("/");
      }
    };
    checkAuthentication();
  }, [user, router]);

  const GoogleAuthLogin = useCallback(
    async (cred: CredentialResponse) => {
      toast.loading("Login....", { id: "4" });
      try {
        const authToken = await HandelLoginWithGoogle(cred);
        if (authToken) {
          localStorage.setItem("_Autherization", authToken);
          await queryClient.invalidateQueries(["current_user"]);
          toast.success("Login Success", { id: "4" });
          router.push("/dashboard/home");
        }
      } catch (error) {
        toast.error("Login Failed");
        console.error("Error during Google authentication:", error);
      }
    },
    [queryClient, router]
  );

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      {/* logo */}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="col-span-6 flex justify-center items-center pb-2">
            <div className="mb-7 ml-14">
              <RiTwitterXFill size={330} />
            </div>
          </div>

          {/* login */}
          <div className="col-span-6 w-full">
            <div className="flex flex-col pl-20 pt-28">
              <span>
                <h1 className="font-bold text-7xl">Happening now</h1>
              </span>
              <span className="pt-16 font-bold text-3xl">
                <h2>Join today.</h2>
              </span>

              <div className="w-96 rounded-full pt-6 m-1">
                <GoogleLogin
                  onSuccess={(cred) => {
                    GoogleAuthLogin(cred);
                    console.log("here is credential ", cred);
                  }}
                />
              </div>

              <div className="flex mt-6">
                <button className="bg-[#1D9BF0] font-semibold justify-center items-center w-60 h-10 text-white rounded-3xl">
                  Create account
                </button>
              </div>

              <div className="mt-16 pl-2">
                <h3 className="font-bold text-base">
                  Already have an account?
                </h3>
              </div>
              <div className="flex mt-3">
                <button className="text-[#1D9BF0] font-semibold justify-center items-center w-60 h-10 border border-neutral-400 rounded-3xl">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
