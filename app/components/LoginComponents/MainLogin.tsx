"use client";

import React, { useEffect, useState } from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { GoogleLogin } from "@react-oauth/google";
import Loading from "./loading"; 

export const MainLogin = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
                <GoogleLogin onSuccess={(cred) => console.log(cred)} />
              </div>

              <div className="flex mt-6">
                <button className="bg-[#1D9BF0] font-semibold justify-center items-center w-60 h-10 text-white rounded-3xl">
                  Create account
                </button>
              </div>

              <div className="mt-16 pl-2">
                <h3 className="font-bold text-base">Already have an account?</h3>
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

