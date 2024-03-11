"use client";
import { Buttons_left } from "@/app/components/Buttons_left";
import { Main_TrendingSearch } from "@/app/components/Main_TrendingSerach";
import ProfileCard from "@/app/components/profile";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useUserStore from "../zustand/store";
import { useTheme } from "next-themes";

export default function ProfileLayout() {
  const { CurrUser } = useUserStore();
  const params = useParams<{ profile: string }>();
  console.log("params", params.profile);
  const { user } = useCurrentUser();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  setTheme('dark');
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !user) return null;
    return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="col-span-3 ml-28">
        <Buttons_left user={user} />
      </div>
      <div className="col-span-5 border border-x-gray-700 border-x-[00.1px] border-y-0">
        <ProfileCard/>
      </div>
      <div className="col-span-4 mt-1">
        <Main_TrendingSearch />
      </div>
    </div>
  );
}
