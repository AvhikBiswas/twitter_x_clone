import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useParams } from "next/navigation";
import { getUserTweets } from "../hooks/getUserTweets";
import { Twitte_Feed } from "./Twitte_Feed";
import { Tweet } from "@/gql/graphql";
import { CurrentUser } from "../Types/CurrentUser";
import useUserByID from "../hooks/getUserByID";

const ProfileCard = () => {
  const { profile } = useParams<{ profile: string }>();
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const { isLoading, tweets: fetchedTweets } = getUserTweets({ params: profile, skipValue: 0});
  const {profileData}=useUserByID(profile)

  useEffect(() => {
    if (!isLoading) {
      setTweets(fetchedTweets || []); 
    }
  }, [isLoading, fetchedTweets]);

  return (
    <div className="main_profile">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="flex bg-neutral-200 w-full h-14 z-10">
            <div className="flex">
              <div className="flex items-center ">
                <div className="ml-2  hover:bg-white rounded-full w-7">
                  <IoMdArrowBack
                    className="w-full h-full object-cover rounded-full"
                    size={20}
                  />
                </div>
                <div className="flex flex-col ml-5">
                  <h1 className="font-bold text-xl space-y-0">
                    {profileData?.firstName} {profileData?.lastName}
                  </h1>
                  <div className="pb-1">
                    <span className="text-sm">0 post</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto h-[634px] scrollbar-hide">
            <div className="flex flex-col relative">
              <div className="bg-slate-600 w-full h-52"></div>
              {profile !== profileData?.id ? (
                <span className="flex justify-end pt-3 p-2 text-white">
                  <button className="bg-gray-500 rounded-3xl w-20 p-2">
                    Follow
                  </button>
                </span>
              ) : (
                <span className="flex justify-end pt-3 p-2 text-white">
                  <button className="bg-gray-500 rounded-3xl w-24 p-2">
                    Unfollow
                  </button>
                </span>
              )}
              <span className="absolute mt-36 ml-4 w-36 h-36 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center rounded-full border-4 border-white"
                  src={profileData?.profileUrl}
                  alt=""
                />
              </span>

              <div className="mt-8 ml-4">
                <h1 className="font-bold text-2xl">
                  {profileData?.firstName} {profileData?.lastName}
                </h1>
                <div className="flex font-sans gap-4">
                  <div>
                    <span className="font-bold">0</span>
                    <span className="font-thin p-1">Following</span>
                  </div>
                  <div>
                    <span className="font-bold">0</span>
                    <span className="font-thin p-1">Followers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-11">
              <span className="pt-10">
                {/* Twitte_Feed components */}
                {tweets.map((item) => <Twitte_Feed key={item.id} data={item} />)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
