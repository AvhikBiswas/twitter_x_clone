"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { SlSocialStumbleupon } from "react-icons/sl";

const NotFound = () => {
const router= useRouter();
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-md p-8 bg-black rounded-xl shadow-lg">
        <div className="text-center">
          <SlSocialStumbleupon className="text-7xl text-white mx-auto" />
          <h1 className="text-4xl font-bold text-white mt-4">404</h1>
          <p className="text-lg text-gray-400 mt-2">Oops! Page not found.</p>
          <div className="mt-6">
            <button onClick={()=>router.push('/')} className="bg-gray-700 text-white py-2 px-6 rounded-md shadow-md hover:bg-gray-800 transition duration-300">
              Go back to safety
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
