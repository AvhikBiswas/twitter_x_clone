"use client"

import React from "react";
import { Buttons_left } from "../components/Buttons_left";
import { Main_TrendingSearch } from "../components/Main_TrendingSerach";

const loading = () => {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="col-span-3 ml-28">
        <Buttons_left />
      </div>
      <div className="col-span-5 border border-x-gray-700 border-x-[00.1px] border-y-0">
        <div>LOADING</div>
      </div>
      <div className="col-span-4 mt-1">
        <Main_TrendingSearch />
      </div>
    </div>
  );
};

export default loading;
