"use client";

import { Buttons_left } from "@/app/components/Buttons_left";
import { Main_Feed } from "@/app/components/Main_Feed";
import { Main_TrendingSearch } from "@/app/components/Main_TrendingSerach";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import { useRouter } from "next/navigation"; // Import from next/navigation
import React, {useEffect } from "react";
import toast from "react-hot-toast";

const Home = () => {
  const router = useRouter();


  

  const { user } = useCurrentUser();   // urrent user data

  const authCheck = localStorage.getItem("_Autherization");
  useEffect(() => {
    if (!user?.id || !authCheck) {
      toast.error("Authentication Failed");
      router.push("/");
    }
  }, [authCheck]);

  console.log("user is ", user)
  

  return (
    <div className="grid grid-cols-12 h-screen w-screen ">
      <div className="col-span-3 ml-28 ">
        <Buttons_left user={user} />
      </div>
      <div className="col-span-5  border-[0.1px] ">
        <Main_Feed user={user}/>
      </div>
      <div className="col-span-4 mt-1">
        <Main_TrendingSearch />
      </div>
    </div>
  );
};

export default Home;
