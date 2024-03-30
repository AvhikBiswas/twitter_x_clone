import React from 'react';
import { BsTwitterX } from 'react-icons/bs';

const Loading: React.FC = () => {
  return (
    <div className='flex justify-center xl:text-[20rem] text-[8rem] items-center w-screen h-screen bg-black'>
      <BsTwitterX className='w-fit' />
    </div>
  );
};

export default Loading;
