import React from "react";
import Twitter_PostIcon from "../utils/Twitter_PostIcon";
import { Post_Feed_Icons } from "./Post_Feed_Icons";
import Image from "next/image";
import Link from "next/link";

type TwitteFeed = {
  data: any;
};

export const Twitte_Feed: React.FC<TwitteFeed> = ({ data }) => {
  const imageLoading = () => {
    return "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ledr.com%2Fcolours%2Fwhite.htm&psig=AOvVaw04hU1yljJ_PO9nZst0vPY0&ust=1711739752329000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCND7z9DVl4UDFQAAAAAdAAAAABAI";
  };
  return (
    <div className="flex w-full h-fit pt-3  px-4  light:hover:bg-neutral-50 dark:hover:bg-[#121211]  border-y-gray-700 border-y-[00.1px]">
      <div className="flex flex-col cursor-pointer">
        {/* user image  */}

        <div className="flex relative">
          <Link href={"/" + data.auther.id}>
            <Image
              width={500}
              height={500}
              quality={70}
              priority={true}
              loading="eager"
              src={data?.auther?.profileUrl}
              className="rounded-full absolute  w-10 h-10 cursor-pointer"
              alt="img"
            />
          </Link>
        </div>

        {/* user name Twitte */}

        <div className="ml-12">
          <div className="flex flex-row ml-1">
            <h5 className="text-sm font-bold">
              {data?.auther?.firstName} {data?.auther?.lastName}
            </h5>
            <h5 className="text-sm font-light pl-1">{data?.auther?.userName}</h5>
          </div>
          <div className="flex flex-col">
            <p className="ml-1 text-sm">{data?.content}</p>
          </div>
        </div>

        {/* image section */}

        {data.imageURL && (
          <div className="ml-12 mt-3 w-fit">
            <Image
              // loader={imageLoading}
              width={500}
              height={500}
              quality={10}
              priority={false}
              src={data.imageURL}
              loading="eager"
              className="rounded-2xl w-full h-full"
              alt="img"
            />
          </div>
        )}

        {/* icon feed */}

        <div className="flex ml-11 py-2 gap-16">
          {Twitter_PostIcon.map((Post_Icon) => (
            <Post_Feed_Icons
              key={Post_Icon.title}
              title={Post_Icon.title}
              buttonStyle={Post_Icon.buttonStyle}
              icon={Post_Icon.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
