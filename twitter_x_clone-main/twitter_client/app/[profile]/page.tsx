
"use client";
import React from "react";
import ProfileLayout from "../layouts/ProfileLayout";
import dynamic from "next/dynamic";
import { useCurrentUser } from "../hooks/useCurrentUser";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

 const page=()=>{
  const router=useRouter();
  const ProfileCard = dynamic(() => import("../components/ProfileCard"));
  const { user,error } = useCurrentUser();
  if(error){
    localStorage.removeItem("_Autherization");
    toast.error('Somthing Went wrong',{id:'10'});
    router.push('/')
  }
  return (
      <ProfileLayout>
        <div className="flex w-full">
          <ProfileCard />
        </div>
      </ProfileLayout>
  );
}
export default page;
