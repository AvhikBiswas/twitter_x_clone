"use client";
import React, { useEffect, useState } from "react";
import { LuSettings } from "react-icons/lu";
import { User_InputFeed } from "./User_InputFeed";
import { Twitte_Feed } from "./Twitte_Feed";
import { GetAlltweet } from "../hooks/getAllTweets";
import { Tweet } from "@/gql/graphql";
import { InfiniteScroller } from "better-react-infinite-scroll";

type User = {
  __typename?: "User" | undefined;
  id: string;
  firstName: string;
  emailId: string;
  lastName?: string | null | undefined;
  profileUrl: string;
};

interface Props {
  user: User;
}

export const Main_Feed: React.FC<Props> = ({ user }) => {
  const Line1 =
    "bg-[#1D9BF0] line w-20 ml-[102px] mt-3 h-1 rounded-2xl absolute";
  const Line2 =
    "bg-[#1D9BF0] line w-24 ml-[102px] mt-3 h-1 rounded-2xl absolute";
  const Bold = "font-bold";

  const [buttonStyle1, setButtonStyle1] = useState(Line1);
  const [buttonStyle2, setButtonStyle2] = useState("");
  const [buttonBold1, setButtonBold1] = useState(Bold);
  const [buttonBold2, setButtonBold2] = useState("");
  const [allTweetsData, setAllTweetsData] = useState<Tweet[]>([]);

  function handleButtonClickForYou() {
    setButtonStyle2("");
    setButtonBold2("");
    setButtonStyle1(Line1);
    setButtonBold1(Bold);
  }

  function handleButtonClickFollowing() {
    setButtonStyle1("");
    setButtonBold1("");
    setButtonStyle2(Line2);
    setButtonBold2(Bold);
  }

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isLoading,
  } = GetAlltweet(0);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row ">
        <div className="flex items-center justify-center">
          <button
            className={`light:hover:bg-neutral-200 dark:hover:bg-[#232323] w-72 h-14 ${buttonBold1}`}
            onClick={handleButtonClickForYou}
          >
            For you
            <div className={buttonStyle1}></div>
          </button>
        </div>

        <div className="flex items-center justify-center">
          <button
            className={` w-[300px] h-14 light:hover:bg-neutral-200 dark:hover:bg-[#232323]  ${buttonBold2}`}
            onClick={handleButtonClickFollowing}
          >
            Following
            <div className={buttonStyle2}></div>
          </button>
        </div>
        <div className="flex justify-center items-center w-[50px] cursor-pointer">
          <div className="p-1 light:hover:bg-neutral-200 dark:hover:bg-[#232323]  rounded-full">
            <LuSettings size={20} />
          </div>
        </div>
      </div>

      {/* scroll section  */}
      <div className="overflow-x-auto h-[42rem] scrollbar-hide">
        <div className="flex pt-2 border border-y-gray-700 border-y-[00.1px] border-x-0">
          <User_InputFeed />
        </div>

        <div className="flex flex-col">
          <InfiniteScroller
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            loadingMessage={
              isFetchingNextPage ? <p>Loading...</p> : <p>No more Tweet Left</p>
            }
            endingMessage={<p>The beginning of time...</p>}
          >
            {data?.pages.map((page) =>
              page?.getAllTweets.map((value: Tweet) => (
                <Twitte_Feed key={value.id} data={value} />
              ))
            )}
          </InfiniteScroller>
        </div>
      </div>
    </div>
  );
};
