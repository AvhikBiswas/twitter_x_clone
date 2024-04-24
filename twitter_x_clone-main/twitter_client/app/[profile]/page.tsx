"use client";
import React from "react";
import ProfileLayout from "../layouts/ProfileLayout";
import dynamic from "next/dynamic";
import { useCurrentUser } from "../hooks/useCurrentUser";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const ProfileCard = dynamic(() => import("../components/ProfileCard"));
  const { user, error } = useCurrentUser();
  if (error) {
    localStorage.removeItem("_Authorization");
    toast.error("Something went wrong", { id: "10" });
    router.push("/");
  }
  return (
    <ProfileLayout>
      <div className="flex w-full">
        <ProfileCard />
      </div>
    </ProfileLayout>
  );
}

export default Page; // Change export name to start with uppercase letter
