import { ReactNode } from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { RiFileListFill } from "react-icons/ri";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { HiOutlineUser } from "react-icons/hi";
import { CiCircleMore } from "react-icons/ci";
import { SlSocialStumbleupon } from "react-icons/sl";

type manueButton = {
  title: string;
  icon: ReactNode;
  link: string;
};

const Left_buttons: manueButton[] = [
  {
    title: "Home",
    icon: <MdHomeFilled />,
    link: "/dashboard/home",
  },
  {
    title: "Explore",
    icon: <IoSearch />,
    link: "",
  },
  {
    title: "Notifications",
    icon: <IoNotificationsOutline />,
    link: "",
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
    link: "/",
  },
  {
    title: "Lists",
    icon: <RiFileListFill />,
    link: "/",
  },
  {
    title: "Communities",
    icon: <LiaUserFriendsSolid />,
    link: "/",
  },
  {
    title: "Premium",
    icon: <SlSocialStumbleupon />,
    link: "/",
  },
  {
    title: "Profile",
    icon: <HiOutlineUser />,
    link: "/",
  },
  {
    title: "More",
    icon: <CiCircleMore />,
    link: "/",
  },
];

export default Left_buttons;

export const Bottom_buttons: manueButton[] = [
  {
    title: "Home",
    icon: <MdHomeFilled />,
    link: "/dashboard/home",
  },
  {
    title: "Explore",
    icon: <IoSearch />,
    link: "",
  },
  {
    title: "Premium",
    icon: <SlSocialStumbleupon />,
    link: "",
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
    link: "",
  },
  {
    title: "Profile",
    icon: <HiOutlineUser />,
    link: "",
  },
  {
    title: "Notifications",
    icon: <IoNotificationsOutline />,
    link: "",
  },
];
