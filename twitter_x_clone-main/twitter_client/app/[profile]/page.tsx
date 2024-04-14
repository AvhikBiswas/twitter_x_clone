import React from "react";
import ProfileLayout from "../layouts/ProfileLayout";
import dynamic from "next/dynamic";

 const page=()=>{
  const ProfileCard = dynamic(() => import("../components/ProfileCard"));

  return (
      <ProfileLayout>
        <div className="flex w-full">
          <ProfileCard />
        </div>
      </ProfileLayout>
  );
}
export default page;
