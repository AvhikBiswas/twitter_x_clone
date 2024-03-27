"use client";
import React, { useEffect, useState } from "react";
import { LuSettings } from "react-icons/lu";
import { User_InputFeed } from "./User_InputFeed";
import { Twitte_Feed } from "./Twitte_Feed";
import { GetAlltweet } from "../hooks/getAllTweets";
import { Tweet } from "@/gql/graphql";
import { InfiniteScroller } from "better-react-infinite-scroll";
import Link from "next/link";
import { Bottom_buttons } from "../utils/Left_buttons";
import useUserStore from "../zustand/store";
import { FaCircleUser, FaXTwitter } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";

type User = {
  __typename?: "User" | undefined;
  id: string;
  firstName: string;
  emailId: string;
  lastName?: string | null | undefined;
  profileUrl: string;
};

interface Props {
  user?: User;
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
  const [optionBar, setOptionBar] = useState(false);
  const { CurrUser } = useUserStore();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isLoading,
  } = GetAlltweet(0);

  const handleButtonClickForYou = () => {
    setButtonStyle2("");
    setButtonBold2("");
    setButtonStyle1(Line1);
    setButtonBold1(Bold);
  };

  const handleButtonClickFollowing = () => {
    setButtonStyle1("");
    setButtonBold1("");
    setButtonStyle2(Line2);
    setButtonBold2(Bold);
  };

  const router = useRouter();
  const handelBar = () => {
    setOptionBar(!optionBar);
  };
  const handleLogout = () => {
    localStorage.removeItem("_Autherization");
    router.push("/");
  };

  return (
    <div className="flex flex-col w-full h-[10%]">
      <div className={`z-50 lg:hidden md:hidden ${optionBar ? "sm:inline" : "hidden"}`}>
        <span className="fixed flex flex-col h-[100%] w-[100%] opacity-30 dark:bg-slate-400"></span>
        <div className="fixed pt-8 pl-4 flex flex-col h-[100%] w-[60%] dark:bg-black">
          <span
            onClick={handelBar}
            className="text-5xl p-1 w-fit pl-4 dark:hover:bg-[#424141]"
          >
            <RxCross2 />
          </span>
          {Bottom_buttons.map((item) => (
            <span key={item.title}>
              <Link
                className="flex justify-start mb-[3px] pl-4 items-center gap-5 p-[10px]  cursor-pointer"
                href={item.title === "Profile" ? "/" + CurrUser?.id : item.link}
              >
                <span className=" text-5xl">{item.icon}</span>
                <span className="text-3xl font-sans mr-28">{item.title}</span>
              </Link>
            </span>
          ))}
          <div className="flex pl-4 justify-start mb-[3px] items-center gap-5 p-[10px] cursor-pointe">
            <div
              onClick={handleLogout}
              className="flex cursor-pointer hover:text-base"
            >
              <span className="text-5xl ">
                <TbLogout />
              </span>
              <span className="text-3xl pl-4 font-sans mr-28">Log Out</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between p-5 md:hidden ">
        <div>
          <FaCircleUser size={40} onClick={handelBar} />
        </div>
        <div>
          <FaXTwitter size={40} />
        </div>
        <div>
          <LuSettings size={30} />
        </div>
      </div>

      <div className="flex flex-row">
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
            className={`w-72 h-14 light:hover:bg-neutral-200 dark:hover:bg-[#232323]  ${buttonBold2}`}
            onClick={handleButtonClickFollowing}
          >
            Following
            <div className={buttonStyle2}></div>
          </button>
        </div>
        <div className="lg:flex hidden justify-center items-center w-[50px] cursor-pointer">
          <div className="p-1 light:hover:bg-neutral-200 dark:hover:bg-[#232323]  rounded-full">
            <LuSettings size={20} />
          </div>
        </div>
      </div>

      {/* scroll section  */}
      <div className="overflow-x-auto lg:h-[90vh] sm:h-[90vh] scrollbar-hide">
        <div className="flex pt-2 border border-y-gray-700 border-y-[00.1px] border-x-0">
          <User_InputFeed />
        </div>

        <div className="flex flex-col">
          <InfiniteScroller
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            loadingMessage={isFetchingNextPage ? <p>Loading...</p> : <p></p>}
            endingMessage={<p></p>}
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
