import React, { useState, useEffect } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { GrSchedulePlay } from "react-icons/gr";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineBrokenImage, MdOutlineGifBox, MdOutlinePoll } from "react-icons/md";
import { Feedicon } from "../utils/FeedIconTypes";

export const User_InputFeed = () => {
  const [content, setContent] = useState('');
  const [isPostButtonDisabled, setIsPostButtonDisabled] = useState(true);
  const [extraLetters, setExtraLetters] = useState(0);

  const calculateRows = () => {
    const rows = content.split('\n').length;
    return rows;
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    const textarea = document.getElementById("userFeedTextarea");
    if (textarea) {
      const remainingCharacters = 255 - content.length;
      setExtraLetters(remainingCharacters);

      if (content.length > 255) {
        setExtraLetters(remainingCharacters);
        setIsPostButtonDisabled(true);
      } else {
        setIsPostButtonDisabled(false);
      }

      if (content.split('').length === 0) {
        textarea.style.height = '40px';
        setIsPostButtonDisabled(true);
      }

      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [content]);

  const iconStyle = { color: '#1D9BF0', width: '35px', height: '35px' };

  return (
    <div className='flex-grow flex-shrink'>
      <div className='flex ml-2 p-2 relative'>
        <img
          src="https://avatars.githubusercontent.com/u/82642119?s=96&v=4"
          className="rounded-full w-10 h-10 cursor-pointer"
          alt="img"
        />
        <div className='flex pl-1 items-center justify-center text-center flex-grow'>
          <textarea
            id="userFeedTextarea"
            className='w-full flex justify-center text-left mt-1 text-xl text-[#536471] items-center pl-3 focus:outline-none resize-none overflow-hidden'
            style={{ height: '40px',}}
            placeholder='What is happening?!'
            name="twitter"
            value={content}
            onChange={handleContentChange}
            rows={calculateRows()}
          />

        </div>
      </div>
      <div className="flex flex-row mt-5 ml-14">
        <div className="flex p-1 ml-1 items-center">
          {Feedicon.map((button) => (
            <div key={button.title} style={iconStyle} className="hover:bg-neutral-200 flex rounded-full justify-center items-center">
              {button.icon}
            </div>
          ))}
        </div>
        <div className="flex ml-auto mr-4 pb-3">
          {extraLetters < 0 ? (
            <span className="w-9 h-9 hover:bg-neutral-200 flex rounded-full mt-1 justify-center text-center mr-2  items-center">{extraLetters}</span>
          ) : null}
          <button
            className={`w-16 ${isPostButtonDisabled ? 'bg-blue-200' : 'bg-[#1D9BF0] hover:bg-[#1083E5]'} h-9 mt-1 text-white font-semibold text-base rounded-2xl`}
            disabled={isPostButtonDisabled}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
