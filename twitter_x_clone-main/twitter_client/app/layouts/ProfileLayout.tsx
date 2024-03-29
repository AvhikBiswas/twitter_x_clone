"use client";

import { Buttons_left } from "@/app/components/Buttons_left";
import { Main_TrendingSearch } from "@/app/components/Main_TrendingSerach";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useUserStore from "../zustand/store";
import { useTheme } from "next-themes";
import { Bottom_button } from "../components/Bottom_button";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  const { CurrUser } = useUserStore();
  const params = useParams<{ profile: string }>();
  const { user } = useCurrentUser();
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
    setMounted(true);
  }, [setTheme]);

  if (!mounted || !user) return null;

  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="lg:col-span-3 lg:ml-24 hidden sm:col-span-1 md:inline-block">
        <Buttons_left />
      </div>
      <div className="lg:col-span-5 md:col-span-9 w-fit lg:w-full md:border-x-[00.1px] border-x-gray-700 border-y-0 sm:col-span-8">
        {children}
      </div>
      <div className="lg:col-span-4 hidden col-span-1 xl:inline-block">
        <Main_TrendingSearch />
      </div>
    </div>
  );
}
