import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import Left_buttons from '../utils/Left_buttons';
import Link from "next/link";
import { IoIosMore } from 'react-icons/io';


export const Buttons_left = () => {
    return (
        <div className='home mt-[1px]'>
            <div className='w-fit h-fit p-3 hover:bg-neutral-200 cursor-pointer rounded-full'>
                <FaXTwitter size={31} />
            </div>
            <div>
                <ul className='mt-1'>
                    {Left_buttons.map((item) => (
                        <li key={item.title}>
                            <Link
                                className="flex justify-start items-center gap-4 hover:bg-neutral-200 rounded-full px-3 py-3 w-fit cursor-pointer"
                                href={item.link}
                            >
                                <span className=" text-3xl" >{item.icon}</span>
                                <span className="hidden text- sm:inline">{item.title}</span>
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
            <div className='flex justify-start items-center mt-2'>
                <button className='bg-[#1D9BF0] hover:bg-[#1083E5]  w-56 h-14 text-white font-bold text-lg  rounded-3xl'>Post</button>
            </div>
            <div className='flex justify-center items-center hover:bg-neutral-200 mt-12 w-64 h-16 text-black font-bold text-lg rounded-full'>
                <div className='flex flex-row'>
                    <img src="https://avatars.githubusercontent.com/u/82642119?s=96&v=4" className="rounded-full w-10 h-10" alt="img" />
                    <div className='flex flex-col ml-2'>
                        <h5 className='text-sm'>Avhik Biswas</h5>
                        <h5 className='text-sm font-light'>@AVIK0000007</h5>
                    </div>
                    <div className='ml-10 flex justify-center items-center mr-4'>
                        <IoIosMore /> 
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
