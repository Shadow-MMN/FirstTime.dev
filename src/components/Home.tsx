"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchResults searchValue={searchValue} />
    </>
  );
};

export default Home;
