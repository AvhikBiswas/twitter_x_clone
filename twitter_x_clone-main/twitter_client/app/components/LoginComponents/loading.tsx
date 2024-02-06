import React from 'react';
import { BsTwitterX } from 'react-icons/bs';

const Loading: React.FC = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-black'>
      <BsTwitterX size={300} color='white' />
    </div>
  );
};

export default Loading;
