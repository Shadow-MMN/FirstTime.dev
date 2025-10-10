"use client";
import { useState } from "react";
import { IoIosSearch, IoMdClose } from "react-icons/io";
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="bg-[#f5f5f5] text-[#181818] dark:bg-[#383838] dark:text-white max-w-[640px] mx-auto rounded-r-full rounded-l-full px-4 py-3 flex items-center">
      <span>
        <IoIosSearch className="w-6 h-6" />
      </span>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for issues"
        className="flex-1 ml-2 focus:outline-none"
      />
      <span>
        <IoMdClose
          className={`${searchValue ? "block" : "hidden"}`}
          onClick={() => setSearchValue("")}
          aria-label="Cancel search"
          aria-hidden={!searchValue}
        />
      </span>
    </div>
  );
};

export default SearchBar;
