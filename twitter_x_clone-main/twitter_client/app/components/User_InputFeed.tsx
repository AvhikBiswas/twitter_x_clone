import React, { useState, useEffect, useRef, useCallback } from "react";
import { Feedicon } from "../utils/FeedIconTypes";
import { useCreateTweet } from "../hooks/createTweet";
import toast from "react-hot-toast";
import { QueryClient } from "@tanstack/react-query";

export const User_InputFeed = () => {
  const [content, setContent] = useState("");
  const [isPostButtonDisabled, setIsPostButtonDisabled] = useState(true);
  const [extraLetters, setExtraLetters] = useState(0);
  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState(null);

  const calculateRows = () => {
    const rows = content.split("\n").length;
    return rows;
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const handelImageInput = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
  }, []);

  const handleImageChange = (e: any) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
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

      if (content.split("").length === 0) {
        textarea.style.height = "40px";
        setIsPostButtonDisabled(true);
      }

      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [content]);

  const iconStyle = { color: "#1D9BF0", width: "35px", height: "35px" };

  const createTweetMutation = useCreateTweet();

  async function handelPost() {
    if (content.length > 5) {
      try {
       const postTweet= await createTweetMutation.mutate({ content: content });
       console.log('postTweet--------------->',postTweet );
       setContent('');
      } catch (error) {
        toast.error("Somthing Went Wrong")
      }
    }
    return;
  }

  return (
    <div className="flex-grow flex-shrink">
      <div className="flex ml-2 p-2 relative">
        <img
          src="https://avatars.githubusercontent.com/u/82642119?s=96&v=4"
          className="rounded-full w-10 h-10 cursor-pointer"
          alt="img"
        />
        <div className="flex pl-1 items-center justify-center text-center flex-grow">
          <textarea
            id="userFeedTextarea"
            className="w-full flex justify-center text-left mt-1 text-xl light:text-[#536471] items-center pl-3 focus:outline-none bg-inherit resize-none overflow-hidden"
            style={{ height: "40px" }}
            placeholder="What is happening?!"
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
            <div
              key={button.title}
              onClick={button.title === "Image" ? handelImageInput : undefined}
              style={iconStyle}
              className="light:hover:bg-neutral-200 dark:hover:bg-[#232323] cursor-pointer flex rounded-full justify-center items-center"
            >
              {button.icon}
            </div>
          ))}
        </div>
        <div className="flex ml-auto mr-4 pb-3">
          {extraLetters < 0 ? (
            <span className="w-9 h-9 hover:bg-neutral-200 flex rounded-full mt-1 justify-center text-center mr-2  items-center">
              {extraLetters}
            </span>
          ) : null}
          <button
            onClick={handelPost}
            className={`w-16 ${
              isPostButtonDisabled
                ? "bg-blue-200"
                : "bg-[#1D9BF0] hover:bg-[#1083E5]"
            } h-9 mt-1 text-white font-semibold text-base rounded-2xl`}
            disabled={isPostButtonDisabled}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
