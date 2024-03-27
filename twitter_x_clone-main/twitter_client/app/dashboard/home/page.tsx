"use client";

import { Buttons_left } from "@/app/components/Buttons_left";
import { Main_Feed } from "@/app/components/Main_Feed";
import { Main_TrendingSearch } from "@/app/components/Main_TrendingSerach";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import ProfileLayout from "@/app/layouts/ProfileLayout";
import { useRouter } from "next/navigation"; // Import from next/navigation
import React, { useCallback, useEffect } from "react";

const Home = () => {
  const router = useRouter();

  const { user } = useCurrentUser();

  const authCheck = localStorage.getItem("_Autherization");
  useEffect(() => {
    if (!user?.id || !authCheck) {
      router.push("/");
    }
  }, [authCheck]);

  return (
    <div className="flex ">
      <ProfileLayout>
        <div className="flex">
          <Main_Feed />
        </div>
      </ProfileLayout>
    </div>
  );
};

export default Home;
