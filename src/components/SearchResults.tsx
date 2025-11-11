import { DUMMY_ISSUES } from "@/constants";
import IssuesCard from "./IssuesCard";

const SearchResults = ({ searchValue }: { searchValue: string }) => {
  const filteredIssues = DUMMY_ISSUES.filter((issue) => {
    const query = searchValue.toLowerCase();
    return (
      issue.issueTitle.toLowerCase().includes(query) ||
      issue.issuer.toLowerCase().includes(query) ||
      issue.issueTags.some((tag) => tag.toLowerCase().includes(query)) ||
      issue.issueLanguages.some((lang) => lang.toLowerCase().includes(query))
    );
  });

  if (filteredIssues.length === 0) {
    return (
      <div className="max-w-full mx-auto border border-gray-600 dark:border-gray-200 min-h-44 rounded-xl p-4 mt-4 flex justify-center items-center">
        <p className="text-gray-500 dark:text-gray-200 mt-4 text-4xl">
          No results found.
        </p>
      </div>
    );
  }

  return (
    <>
      {filteredIssues.map((issue, index) => {
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
