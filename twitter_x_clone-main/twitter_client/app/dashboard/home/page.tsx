"use client";
import { useRouter } from "next/navigation";
import ProfileLayout from "@/app/layouts/ProfileLayout";
import useUserStore from "@/app/zustand/store";
import { Main_Feed } from "@/app/components/Main_Feed";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";

const Home = () => {
  const router = useRouter();
  const { CurrUser } = useUserStore();
  const { user } = useCurrentUser();
  return (
    <ProfileLayout>
      <div className="flex">
        <Main_Feed />
      </div>
    </ProfileLayout>
  );
};

export default Home;
