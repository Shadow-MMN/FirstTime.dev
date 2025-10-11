import React from "react";
import SearchBar from "./SearchBar";
import IssuesCard from "./IssuesCard";
const Home = () => {
  return (
    <>
      <SearchBar />
      <IssuesCard
        issuer="Shadow"
        issueTitle="FirstTime.dev"
        issueTags={["bug", "feature"]}
        issueLanguages={["JavaScript", "TypeScript"]}
        issueLastUpdate="3"
      />
    </>
  );
};

export default Home;
