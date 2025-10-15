import { DUMMY_ISSUES } from "@/constants";
import IssuesCard from "./IssuesCard";

const SearchResults = () => {
  return (
    <>
      {DUMMY_ISSUES.map((issue, index) => {
        const {
          issueTitle,
          issuer,
          issueTags,
          issueLanguages,
          issueLastUpdate,
        } = issue;
        return (
          <IssuesCard
            key={index}
            issueTitle={issueTitle}
            issuer={issuer}
            issueTags={issueTags}
            issueLanguages={issueLanguages}
            issueLastUpdate={issueLastUpdate}
          />
        );
      })}
    </>
  );
};

export default SearchResults;
