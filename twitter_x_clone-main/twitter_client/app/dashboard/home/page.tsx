"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Main_Feed = dynamic(() =>
  import("@/app/components/Main_Feed").then((mod) => mod.Main_Feed)
);

import ProfileLayout from "@/app/layouts/ProfileLayout";
import useUserStore from "@/app/zustand/store";

const Home = () => {
  const router = useRouter();
  const { CurrUser } = useUserStore();

  return (
    <div className="flex">
      <ProfileLayout>
        <div className="flex">
          <Main_Feed />
        </div>
      </ProfileLayout>
    </div>
  );
};

export default Home;
