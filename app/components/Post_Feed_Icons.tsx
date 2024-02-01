import React from 'react';
import { ManueButton } from '../Types/ManueButton';

export const Post_Feed_Icons: React.FC<ManueButton> = ({ title, link, icon }) => {
    return (
        <div key={title} className="hover:bg-neutral-200 p-2 text-lg flex rounded-full gap-2">
            {icon}
        </div>
    );
};

