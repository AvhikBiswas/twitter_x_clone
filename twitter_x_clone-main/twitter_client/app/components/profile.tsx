import React, { useState } from 'react';
import { HiOutlinePhotograph } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { User } from '@/gql/graphql';
import useUserStore from '../zustand/store';

const ProfileCard = ({ profile }:{profile:User}) => {
    const {CurrUser}=useUserStore();
    console.log("zustang data ",CurrUser);
    
return(
    <div>
        <div>
            <img src={CurrUser?.profileUrl} alt="img" />
            <h1>{CurrUser?.firstName} hi</h1>
        </div>
    </div>
  );
};

export default ProfileCard;