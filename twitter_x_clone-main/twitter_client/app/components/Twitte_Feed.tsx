import React from 'react';
import Twitter_PostIcon from '../utils/Twitter_PostIcon';
import { Post_Feed_Icons } from './Post_Feed_Icons';

type TwitteFeed = {
  UserAvatar: string,
  Twitte_text: string,
  UserUplodedImg?: string
}

export const Twitte_Feed: React.FC<TwitteFeed> = ({ UserAvatar, Twitte_text, UserUplodedImg }) => {
  console.log(UserAvatar);
  return (
    <div className='flex pt-3 border-b-2 px-4  hover:bg-neutral-50 cursor-pointer '>
      <div className='flex flex-col'>

        {/* user image  */}

        <div className='flex relative'>
          <img
            src="https://avatars.githubusercontent.com/u/82642119?s=96&v=4"
            className="rounded-full absolute  w-10 h-10 cursor-pointer"
            alt="img"
          />
        </div>

        {/* user name Twitte */}

        <div className='ml-12'>
          <div className='flex flex-row ml-1'>
            <h5 className='text-sm font-bold'>Avhik Biswas</h5>
            <h5 className='text-sm font-light pl-1'>@AVIK0000007</h5>
          </div>
          <div className='flex flex-col'>
            <p className='ml-1 text-sm'>
              The way in which Olympic accolade winners are treated in "Achhe Dinn"! @narendramodi
            </p>
          </div>
        </div>

        {/* image section */}

        <div className='ml-12 mt-3'>
          <img src="https://pbs.twimg.com/media/FxNt9owaAAAFSut?format=jpg&name=small " className='rounded-2xl' alt="img" />
        </div>

        {/* icon feed */}

        <div className='flex ml-11 py-2 gap-16'>
        {
          Twitter_PostIcon.map((Post_Icon)=>(
            <Post_Feed_Icons title={Post_Icon.title} icon={Post_Icon.icon} />
          ))
        }
        </div>

      </div>
    </div>
  );
};
