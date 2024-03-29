import React from "react";
import ProfileLayout from "../layouts/ProfileLayout";
import dynamic from "next/dynamic";

export default function () {
  const ProfileCard = dynamic(() => import("../components/profile"));

  return (
    <div className="">
      <ProfileLayout>
        <div className="flex w-full">
          <ProfileCard />
        </div>
      </ProfileLayout>
    </div>
  );
}
