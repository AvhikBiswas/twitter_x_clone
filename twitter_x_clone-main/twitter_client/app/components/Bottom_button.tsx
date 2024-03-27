import React from "react";
import { Bottom_buttons } from "../utils/Left_buttons";
import Link from "next/link";

export const Bottom_button = () => {
  return (
    <div className="flex justify-between  items-center">
      {Bottom_buttons.map((item) => (
        <li key={item.title}>
          <Link
            className="flex justify-start mb-[3px] items-center gap-5 dark:hover:bg-[#232323] rounded-full p-[10px] w-fit cursor-pointer"
            href={item.link}
          >
            <span className="text-3xl">{item.icon}</span>
          </Link>
        </li>
      ))}
    </div>
  );
};
