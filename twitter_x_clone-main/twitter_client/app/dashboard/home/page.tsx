"use client"

import { Buttons_left } from "@/app/components/Buttons_left";
import { Main_Feed } from "@/app/components/Main_Feed";
import { Main_TrendingSearch } from "@/app/components/Main_TrendingSerach";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import { useRouter } from "next/navigation"; // Import from next/navigation
import React, {useCallback, useEffect } from "react";
import toast from "react-hot-toast";

const Home = () => {
  const router = useRouter();


  const { user } = useCurrentUser();  

  const authCheck = localStorage.getItem("_Autherization");
  useEffect(() => {
    if (!user?.id || !authCheck) {
      toast.error("Authentication Failed");
      router.push("/");
    }
  }, [authCheck]);

  

  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="col-span-3 ml-28 h-96">
        <Buttons_left/>
      </div>
      <div className="col-span-5 border border-x-gray-700 border-x-[00.1px] border-y-0">
        <Main_Feed />
      </div>
      <div className="col-span-4 mt-1 h-96 ">
        <Main_TrendingSearch />
      </div>
    </div>
  );
};

export default Home;
