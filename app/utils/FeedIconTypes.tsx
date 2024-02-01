import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { GrSchedulePlay } from "react-icons/gr";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineBrokenImage, MdOutlineGifBox, MdOutlinePoll } from "react-icons/md";

export const Feedicon = [
  {
    title: "Broken Image",
    icon: <MdOutlineBrokenImage size={21} />,
  },
  {
    title: "GIF Box",
    icon: <MdOutlineGifBox size={21} />,
  },
  {
    title: "Poll",
    icon: <MdOutlinePoll size={21} />,
  },
  {
    title: "Emoji",
    icon: <BsEmojiSmile size={18} />,
  },
  {
    title: "Schedule Play",
    icon: <GrSchedulePlay size={20} />,
  },
  {
    title: "Location",
    icon: <IoLocationOutline size={21} />,
  },
];
