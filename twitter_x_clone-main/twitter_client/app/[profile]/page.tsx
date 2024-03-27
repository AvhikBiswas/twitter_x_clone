import React from "react";
import ProfileCard from "../components/profile";
import ProfileLayout from "../layouts/ProfileLayout";

export default function () {
  return (
    <div className="">
      <ProfileLayout>
        <div className="flex">
          <ProfileCard />
        </div>
      </ProfileLayout>
    </div>
  );
}
