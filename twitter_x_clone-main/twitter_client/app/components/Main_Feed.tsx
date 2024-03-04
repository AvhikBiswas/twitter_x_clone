"use client";
import React, { useEffect, useState } from "react";
import { LuSettings } from "react-icons/lu";
import { User_InputFeed } from "./User_InputFeed";
import { Twitte_Feed } from "./Twitte_Feed";

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

  return (
    <div className="flex flex-col">
      <div className="flex flex-row border ">
        <div className="flex items-center justify-center">
          <button
            className={` hover:bg-neutral-200  w-72 h-14 ${buttonBold1}`}
            onClick={handleButtonClickForYou}
          >
            For you
            <div className={buttonStyle1}></div>
          </button>
        </div>

        <div className="flex items-center justify-center">
          <button
            className={` w-[300px] h-14 hover:bg-neutral-200  ${buttonBold2}`}
            onClick={handleButtonClickFollowing}
          >
            Following
            <div className={buttonStyle2}></div>
          </button>
        </div>

        <div className="flex justify-center  items-center w-[50px]">
          <div className="p-1 hover:bg-neutral-200 rounded-full">
            <LuSettings size={20} />
          </div>
        </div>
      </div>

      {/* scroll section  */}
      <div className="overflow-x-auto h-[634px] scrollbar-hide">
        <div className="flex pt-2 border border-l-0 border-r-0">
          <User_InputFeed />
        </div>

        <div className="flex flex-col">
          <Twitte_Feed UserAvatar="hi" Twitte_text="hiooo" />
          <Twitte_Feed UserAvatar="hi" Twitte_text="hiooo" />
          <Twitte_Feed UserAvatar="hi" Twitte_text="hiooo" />
          <Twitte_Feed UserAvatar="hi" Twitte_text="hiooo" />
        </div>
      </div>
    </div>
  );
};
