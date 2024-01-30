import React from 'react';
import { FaXTwitter } from "react-icons/fa6";


export const Buttons_left = () => {
    return (
        <div className='home flex mt-1'>
            <div className='w-fit h-fit p-3 hover:bg-neutral-200 cursor-pointer rounded-full'>
                <FaXTwitter size={30}/>
            </div>
        </div>
    )
}
