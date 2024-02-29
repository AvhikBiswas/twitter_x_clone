"use client";
import { Buttons_left } from "@/app/components/Buttons_left";
import { Main_TrendingSearch } from "@/app/components/Main_TrendingSerach";
import ProfileCard from "@/app/components/profile";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import React from "react";

export default function page() {
  const { user } = useCurrentUser();
  return (
    <div className="grid grid-cols-12 h-screen w-screen ">
      <div className="col-span-3 ml-28 h-96">
        <Buttons_left user={user} />
      </div>
      <div className="col-span-5 h-96 border-[0.1px] ">
      <ProfileCard profile={user}/>
      </div>
      <div className="col-span-4 mt-1 h-96 ">
        <Main_TrendingSearch />
      </div>
    </div>
  );
}
