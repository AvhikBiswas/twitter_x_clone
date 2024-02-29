import React, { useState, useRef, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import Left_buttons from "../utils/Left_buttons";
import Link from "next/link";
import { IoIosMore } from "react-icons/io";
import { useRouter } from "next/navigation";

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
      <div className="w-fit h-fit p-3 hover:bg-neutral-200 cursor-pointer rounded-full">
        <FaXTwitter size={31} />
      </div>
      <div>
        <ul className="mt-1">
          {Left_buttons.map((item) => (
            <li key={item.title}>
              <Link
                className="flex justify-start items-center gap-4 hover:bg-neutral-200 rounded-full p-[10px] w-fit cursor-pointer"
                // {item.title==="Profile"?href={user.id}:}
                href={item.link}
              >
                <span className=" text-3xl">{item.icon}</span>
                <span className=" text-xl sm:inline">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-start items-center mt-2">
        <button className="bg-[#1D9BF0] hover:bg-[#1083E5]  w-56 h-[49px] text-white font-bold text-base  rounded-full">
          Post
        </button>
      </div>

      <div
        ref={logoutPopupRef}
        className={`${
          !logoutStyle
            ? "hidden"
            : "flex justify-start items-center bg-neutral-100 border rounded-xl h-20 absolute w-72"
        }`}
      >
        <div className="flex hover:font-bold font-sans hover:bg-neutral-50 h-10 w-72">
          <button
            className="flex justify-start items-center pl-2 w-64"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center hover:bg-neutral-200 mt-12 w-64 h-16 text-black font-bold text-lg rounded-full">
        <div className="flex flex-row">
          <img
            src={user?.profileUrl}
            className="rounded-full w-10 h-10"
            alt="img"
          />
          <div className="flex flex-col ml-2">
            <h5 className="text-sm">
              {user?.firstName} {user?.lastName}
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
