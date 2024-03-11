import React from 'react';
import { ManueButton } from '../Types/ManueButton';

export const Post_Feed_Icons: React.FC<ManueButton> = ({ title, link, icon, buttonStyle }) => {
    return (
        <div key={title} className={`flex flex-col items-center justify-center p-2 text-lg rounded-full gap-2 ${buttonStyle}`} title={title}>
            {icon}
        </div>
    );
};
