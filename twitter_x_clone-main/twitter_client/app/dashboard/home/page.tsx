"use client";
import { useRouter } from "next/navigation";
import ProfileLayout from "@/app/layouts/ProfileLayout";
import useUserStore from "@/app/zustand/store";
import { Main_Feed } from "@/app/components/Main_Feed";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import toast from "react-hot-toast";

const Home = () => {
  const router = useRouter();
  const { CurrUser } = useUserStore();
  const { user,error } = useCurrentUser();
  if(error){
    localStorage.removeItem("_Autherization");
    toast.error('Somthing Went wrong',{id:'10'});
    router.push('/')
  }
  console.log('CurrUser--->', CurrUser);
  return (
    <ProfileLayout>
      <div className="flex">
        <Main_Feed />
      </div>
    </ProfileLayout>
  );
};

export default Home;
