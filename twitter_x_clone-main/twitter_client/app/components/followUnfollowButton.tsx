"use client"
import React, { useState, useEffect } from "react";
import useUserStore from "../zustand/store";
import useFollow from "../hooks/useFollow";
import useUnFollow from "../hooks/useUnfollow";
import useUserByID from "../hooks/useUserByID";


interface FollowUnfollowButtonProps {
  userId: any;
}

const FollowUnfollowButton: React.FC<FollowUnfollowButtonProps> = ({
  userId,
}) => {
  const { CurrUser } = useUserStore();
  const { profileData, profileDataLoading } = useUserByID(userId);
  const [isFollowing, setIsFollowing] = useState(false);
  const followUser = useFollow();
  const { unfollowUser, isError } = useUnFollow();

  const handleFollow = () => {
    followUser(userId);
  };

  const handleUnfollow = () => {
    unfollowUser(userId);
  };

  useEffect(() => {
    if (!profileDataLoading && CurrUser?.id) {
      const followerIds =
        profileData?.follower?.map((follower: any) => follower.id) || [];
      setIsFollowing(followerIds.includes(CurrUser.id));
    }
  }, [profileDataLoading, CurrUser?.id, profileData?.follower]);

  if (profileDataLoading) {
    return;
  }

  if (CurrUser?.id === userId) {
    return (
      <span className="flex justify-end pt-3 p-2 text-white">
        <button className="bg-gray-500 rounded-3xl w-20 p-2">Edit</button>
      </span>
    );
  }

  return isFollowing ? (
    <span className="flex justify-end pt-3 p-2 text-white">
      <button
        onClick={handleUnfollow}
        className="bg-gray-500 rounded-3xl w-24 p-2"
      >
        Unfollow
      </button>
    </span>
  ) : (
    <span className="flex justify-end pt-3 p-2 text-white">
      <button
        onClick={handleFollow}
        className="bg-gray-500 rounded-3xl w-20 p-2"
      >
        Follow
      </button>
    </span>
  );
};

export default FollowUnfollowButton;
