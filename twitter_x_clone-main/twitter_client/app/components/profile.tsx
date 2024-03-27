"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useParams } from "next/navigation";
import { getUserTweets } from "../hooks/getUserTweets";
import { Twitte_Feed } from "./Twitte_Feed";
import { Tweet } from "@/gql/graphql";
import useUserByID from "../hooks/getUserByID";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";
import { InfiniteScroller } from "better-react-infinite-scroll";
import FollowUnfollowButton from "./followUnfollowButton";

const ProfileCard = () => {
  const { profile } = useParams<{ profile: string }>();
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [pageValue, setPagevalue] = useState<number>(0);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isLoading,
  } = getUserTweets({
    params: profile,
    pageParam: pageValue,
  });

  const { profileData, profileDataLoading } = useUserByID(profile);
  return (
    <div className="main_profile w-full h-full">
      {isLoading && profileDataLoading ? (
        <div className="flex w-full h-full justify-center text-center items-center">
          <AiOutlineLoading3Quarters
            size={40}
            className="flex justify-center text-center items-center"
            color="blue"
          />
        </div>
      ) : (
        <div>
          <div className="flex light:bg-neutral-200 w-full h-14 z-10">
            <div className="flex">
              <div className="flex items-center pt-1">
                <Link href={"/dashboard/home"}>
                  <div className="ml-3  light:hover:bg-white dark:hover:bg-[#242424] cursor-pointer rounded-full w-7">
                    <IoMdArrowBack
                      className="w-full h-full object-cover rounded-full"
                      size={20}
                    />
                  </div>{" "}
                </Link>
                <div className="flex flex-col ml-9">
                  <h1 className="font-semibold text-lg space-y-0">
                    {profileData?.firstName} {profileData?.lastName}
                  </h1>
                  <div className="pb-1">
                    <span className="text-sm dark:text-[#383838] font-extralight">
                      {profileData?.tweets?.length} post
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //scrollbar-hide */}
          <div className="overflow-x-auto lg:h-[90vh] sm:h-[90vh] scrollbar-hide ">
            <div className="flex flex-col relative">
              <div className="bg-slate-600 w-full h-52"></div>

              {/* follow unfollow button */}
              <FollowUnfollowButton userId={profile} />

              <span className="absolute mt-36 ml-4 w-36 h-36 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center rounded-full border-4 border-[#121212]"
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
                    <span className="font-bold">
                      {profileData?.following?.length}
                    </span>
                    <span className="font-thin p-1">Following</span>
                  </div>
                  <div>
                    <span className="font-bold">
                      {profileData?.follower?.length}
                    </span>
                    <span className="font-thin p-1">Followers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-11">
              <span className="pt-10">
                {/* Twitte_Feed components */}
                {isLoading ? (
                  <AiOutlineLoading3Quarters
                    size={20}
                    className="flex justify-center text-center items-center"
                    color="blue"
                  />
                ) : (
                  <InfiniteScroller
                    fetchNextPage={fetchNextPage}
                    hasNextPage={hasNextPage}
                    loadingMessage={
                      isFetchingNextPage ? (
                        <p>Loading...</p>
                      ) : (
                        <p></p>
                      )
                    }
                    endingMessage={<p></p>}
                  >
                    {data?.pages.map((page) =>
                      page?.getAllTweetsById.map((value: Tweet) => (
                        <Twitte_Feed key={value.id} data={value} />
                      ))
                    )}
                  </InfiniteScroller>
                )}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
