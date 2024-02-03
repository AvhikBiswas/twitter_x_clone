import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const Main_TrendingSerach: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const onFocusStyle = "border border-blue-700";
  const defaultStyle = "bg-neutral-100";

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="flex flex-col">
      <div className={`flex justify-start items-center w-80 mt-1 ml-7 h-11 rounded-3xl pl-4 ${isFocused ? onFocusStyle : defaultStyle}`}>
        <div className="flex justify-start items-center">
          <span className="pr-2">
            <CiSearch size={20} className="text-gray-700" />
          </span>
          <span>
            <input
              onFocus={handleFocus}
              onBlur={handleBlur}
              type="text"
              name=""
              id=""
              className={`outline-none h-9 w-60 pl-3 ${isFocused ? "" : defaultStyle}`}
              placeholder="Search"
            />
          </span>
        </div>
      </div>
    </div>
  );
};
