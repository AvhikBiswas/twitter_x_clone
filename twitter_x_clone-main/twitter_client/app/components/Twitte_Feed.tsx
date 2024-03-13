"use clent";

import React from "react";
import Twitter_PostIcon from "../utils/Twitter_PostIcon";
import { Post_Feed_Icons } from "./Post_Feed_Icons";



type TwitteFeed = {
  data: any;
};

export const Twitte_Feed: React.FC<TwitteFeed> = ({ data }) => {

  return (
    <div
      className={`"flex pt-3 ${
        data?.hasBorder ? "" : ""
      }  px-4  light:hover:bg-neutral-50 dark:hover:bg-[#121211] border border-y-gray-700 border-y-[00.1px] border-x-0 "`}
    >
      <div className="flex flex-col cursor-pointer">
        {/* user image  */}

        <div className="flex relative">
          <img
            src={data?.auther?.profileUrl}
            className="rounded-full absolute  w-10 h-10 cursor-pointer"
            alt="img"
          />
        </div>

        {/* user name Twitte */}

        <div className="ml-12">
          <div className="flex flex-row ml-1">
            <h5 className="text-sm font-bold">
              {data?.auther?.firstName} {data?.auther?.lastName}
            </h5>
            <h5 className="text-sm font-light pl-1">@AVIK0000007</h5>
          </div>
          <div className="flex flex-col">
            <p className="ml-1 text-sm">{data?.content}</p>
          </div>
        </div>

        {/* image section */}

        {/* <div className='ml-12 mt-3'>
          <img src={} className='rounded-2xl' alt="img" />
        </div> */}

        {/* icon feed */}

        <div className="flex ml-11 py-2 gap-16">
          {Twitter_PostIcon.map((Post_Icon) => (
            <Post_Feed_Icons title={Post_Icon.title} buttonStyle={Post_Icon.buttonStyle} icon={Post_Icon.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};
