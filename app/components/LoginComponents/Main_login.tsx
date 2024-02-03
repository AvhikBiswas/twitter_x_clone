'use client';

import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { GoogleLogin } from "@react-oauth/google";

export const Main_login = () => {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      {/* logo  */}
        
      <div className="col-span-6 flex justify-center items-center pb-2 ">
        <div className="mb-7 ml-14">
          <RiTwitterXFill size={330} />
        </div>
      </div>

      {/* login */}

      <div className="col-span-6 w-full">
        <div className="flex flex-col pl-20 pt-28 ">
          <span>
            <h1 className="font-bold text-7xl ">Happening now</h1>
          </span>
          <span className="pt-16 font-bold text-3xl">
            <h2>Join today.</h2>
          </span>

          <div className="w-96 rounded-full pt-6 m-1">
            <GoogleLogin
              onSuccess={cred=>console.log(cred)}
            />
          </div>

            <div className="flex mt-6 ">
                <button className="bg-[#1D9BF0] font-semibold justify-center items-center w-60 h-10 text-white rounded-3xl">Create account</button>
            </div>

        </div>
      </div>
    </div>
  );
};
