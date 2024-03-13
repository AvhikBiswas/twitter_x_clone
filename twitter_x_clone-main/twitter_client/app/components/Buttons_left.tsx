import React, { useState, useRef, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import Left_buttons from "../utils/Left_buttons";
import Link from "next/link";
import { IoIosMore } from "react-icons/io";
import { useRouter } from "next/navigation";
import useUserStore from "../zustand/store";

type User = {
  id: string;
  firstName: string;
  emailId: string;
  lastName?: string | null | undefined;
  profileUrl: string;
};

interface Props {
  user: User;
}

export const Buttons_left: React.FC<Props> = ({ user }) => {
  const { CurrUser } = useUserStore();
  const [logoutStyle, setLogoutStyle] = useState(false);
  const logoutPopupRef = useRef(null);
  const router = useRouter();
  const handleLogoutPopUp = () => {
    setLogoutStyle(!logoutStyle); // Toggle the logout style
  };

  const handleLogout = () => {
    localStorage.removeItem("_Autherization");
    router.push("/");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      logoutPopupRef.current &&
      !logoutPopupRef.current.contains(event.target as Node)
    ) {
      setLogoutStyle(false); // Hide the logout menu if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="home mt-[1px]">
      <div className="w-fit h-fit p-3 dark:hover:bg-[#232323] cursor-pointer rounded-full">
        <FaXTwitter size={31} />
      </div>
      <div>
        <ul className="mt-4">
          {Left_buttons.map((item) => (
            <li key={item.title}>
              <Link
                className="flex justify-start items-center gap-4 dark:hover:bg-[#232323] rounded-full p-[10px] w-fit cursor-pointer"
                href={item.title === "Profile" ? "/" + CurrUser?.id : item.link}
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xl sm:inline">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-start items-center mt-2">
        <button className="bg-[#1D9BF0] hover:bg-[#1083E5]  w-56 h-[49px]  font-bold text-base  rounded-full">
          Post
        </button>
      </div>

      <div className="relative mb-6 ">
        <div
          ref={logoutPopupRef}
          className={`${
            !logoutStyle
              ? "hidden"
              : "flex justify-start items-center border rounded-xl dark:bg-[#121212] h-20 absolute w-72"
          }`}
        >
          <div className="flex hover:font-bold font-sans h-10 w-72">
            <button
              className="flex justify-start items-center pl-2 w-64"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center dark:hover:bg-[#323232] mt-12 w-64 h-16 font-bold text-lg rounded-full">
        <div className="flex flex-row pl-3">
          <img
            src={CurrUser?.profileUrl}
            className="rounded-full w-10 h-10"
            alt="img"
          />
          <div className="flex flex-col ml-2">
            <h5 className="text-sm">
              {CurrUser?.firstName} {CurrUser?.lastName}
            </h5>
            <h5 className="text-sm font-light">@AVIK0000007</h5>
          </div>
          <div className="ml-10 flex justify-center items-center mr-4  p-2">
            <IoIosMore onClick={handleLogoutPopUp} />
          </div>
        </div>
      </div>
    </div>
  );
};
