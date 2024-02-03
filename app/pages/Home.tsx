import React from 'react';
import { LuSettings } from 'react-icons/lu';
import { Buttons_left } from '../components/Buttons_left';
import { Main_Feed } from '../components/Main_Feed';
import {Main_TrendingSearch} from '../components/Main_TrendingSerach'

export const Home = () => {
  return (
      <div className='grid grid-cols-12 h-screen w-screen'>
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
