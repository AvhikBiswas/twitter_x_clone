import React, { useState, useEffect } from "react";
import  './UserFeed.css';

export const UserFeed = () => {
  const [content, setContent] = useState('');

  const calculateRows = () => {
    const rows = content.split('\n').length;
    return rows < 5 ? 5 : rows;
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    const textarea = document.getElementById("userFeedTextarea");
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div className='flex-grow flex-shrink'>
      <div className='container flex border border-neutral-700 p-2 items-center'>
        <img
          src="https://avatars.githubusercontent.com/u/82642119?s=96&v=4"
          className="rounded-full w-10 h-10"
          alt="img"
        />
        <div className='flex items-center flex-grow'>
          <textarea
            id="userFeedTextarea"
            className='w-full flex items-center pl-3 focus:outline-none resize-none overflow-hidden'
            style={{ height: '40px' }}
            placeholder='What is happening?!'
            name="twitter"
            value={content}
            onChange={handleContentChange}
            rows={calculateRows()}
          />
        </div>
      </div>
    </div>
  );
};
