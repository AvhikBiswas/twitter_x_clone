"use client"

import { Buttons_left } from '@/app/components/Buttons_left';
import { Main_Feed } from '@/app/components/Main_Feed';
import { Main_TrendingSearch } from '@/app/components/Main_TrendingSerach';
import React from 'react';


 const home = () => {
  return (
      <div className='grid grid-cols-12 h-screen w-screen '>
        <div className="col-span-3 ml-28 ">
          <Buttons_left />
        </div>
        <div className="col-span-5  border-[0.1px] ">
          <Main_Feed/>
        </div>
        <div className="col-span-4 mt-1">
          <Main_TrendingSearch/>
        </div>
      </div>
  );
};
export default home;