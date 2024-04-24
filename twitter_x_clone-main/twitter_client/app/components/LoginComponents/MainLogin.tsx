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
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { SlSocialStumbleupon } from "react-icons/sl";

export const MainLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const queryClient = useQueryClient();
  const { user } = useCurrentUser();

  useEffect(() => {
    const checkAuthentication = async () => {
      const authToken = localStorage.getItem("_Autherization");
      if (!authToken || authToken == undefined) {
        return null;
      }
      if (user?.id) {
        router.push("/dashboard/home");
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
          await queryClient.invalidateQueries({ queryKey: ["current_user"] });
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
          <div className="flex flex-col xl:flex-row xl:ml-60  w-fit h-fit">
            <div className="col-span-6 mt-10 flex  sm:mb-auto xl:m-0 xl:justify-center items-center pb-2">
              <div className="xl:mb-7 xl:mt-16 xl:ml-14 ml-6 text-[3rem] xl:text-[20rem]">
                <SlSocialStumbleupon />
              </div>
            </div>

            {/* login */}
            <div className="col-span-6 xl:ml-48">
              <div className="flex flex-col  pl-20 pt-10 xl:pt-28">
                <span className="flex">
                  <h1 className="font-bold text-3xl xl:text-7xl">
                    Happening now
                  </h1>
                </span>
                <span className="xl:pt-16 pt-5 font-bold xl:text-3xl">
                  <h2>Join today.</h2>
                </span>

                <div className="w-fit h-fit p-2 xl:pt-6 ">
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

                <div className="mt-7 pl-2">
                  <h3 className="font-bold text-base">
                    Already have an account?
                  </h3>
                </div>
                <div className="flex mt-3">
                  <button className="text-[#1D9BF0] font-semibold justify-center items-center w-60 h-10 border border-neutral-400 rounded-3xl">
                    Sign In
                  </button>
                </div>
                <span className="flex flex-col pt-10">
                  <div className="border flex flex-col  rounded-md p-2">
                    <div className="flex">
                      <p className="pr-4">Still In Development</p>{" "}
                      <a
                        href="https://linkedin.com/in/avhik/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CiLinkedin className="cursor-pointer" size={30} />
                      </a>
                    </div>
                    <div className="flex">
                      <p className="pr-3">Let Me Know If You Find Any Bug</p>
                      <a href="https://github.com/AvhikBiswas"
                       target="_blank">
                       
                        <LuGithub className="cursor-pointer" size={30} />
                      </a>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
