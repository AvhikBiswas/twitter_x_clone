import React from 'react';
import { SlSocialStumbleupon } from 'react-icons/sl';

const Loading: React.FC = () => {
  return (
    <div className='flex justify-center xl:text-[20rem] text-[8rem] items-center w-screen h-screen bg-black'>
      <SlSocialStumbleupon className='w-fit' />
    </div>
  );
};

export default Loading;
