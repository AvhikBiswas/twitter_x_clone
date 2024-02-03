'use client';

import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { GoogleLogin } from "@react-oauth/google";

export const Main_login = () => {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      {/* logo  */}

      <div className="col-span-6 border border-neutral-700 flex justify-center items-center pb-2 ">
        <div className="mb-7 ml-14">
          <RiTwitterXFill size={330} />
        </div>
      </div>

      {/* login */}

      <div className="col-span-6  border border-neutral-700">
        <div className="flex flex-col pl-20 pt-28 ">
          <span>
            <h1 className="font-bold text-7xl ">Happening now</h1>
          </span>
          <span className="pt-16 font-bold text-3xl">
            <h2>Join today.</h2>
          </span>
          <div className="w-96">
            <GoogleLogin
              onSuccess={cred=>console.log(cred)}
            />

          </div>
        </div>
      </div>
    </div>
  );
};
