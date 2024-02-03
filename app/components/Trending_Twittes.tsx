import React from "react";
import { TrendingArray } from "../utils/TrendingArray";
import { Trending } from "../Types/Trending";

export const Trending_Twittes: React.FC = () => {
  return (
    <div className="mt-40 ml-12">
      <div className="flex flex-col rounded-2xl bg-neutral-100 w-80 h-fit">
        <div className="pt-4 pl-4">
          <h2 className=" font-bold text-xl">What’s happening</h2>
        </div>

        {/* Trending Section */}

        <span className="flex mt-1 hover:">
          <ul className="w-full">
            
            {TrendingArray.map((item) => (
              <li key={item.Posts} className="hover:bg-slate-200 pl-4 p-3">
                <div className="">
                  <div className="font-light text-xs">{item.TrendingCatagory}</div>
                  <div className="font-bold text-sm">{item.Tag}</div>
                  <div className="font-light text-xs">{item.Posts}</div>
                </div>
              </li>
            ))}

          </ul>
        </span>
        <span className="py-3 rounded-b-2xl pl-4 hover:bg-neutral-200 ">
            <div className="text-blue-400 text-sm cursor-pointer">Show more</div>
        </span>
      </div>
    </div>
  );
};
