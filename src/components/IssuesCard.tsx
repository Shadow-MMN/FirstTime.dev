import React from "react";
import { IssuesCardType } from "@/types";
import { LANGUAGE_COLORS, TAG_STYLES } from "@/constants";

const IssuesCard = ({
  issueTitle,
  issuer,
  issueTags,
  issueLanguages,
  issueLastUpdate,
}: IssuesCardType) => {
  return (
    <div className="max-w-full mx-auto border border-gray-600 dark:border-gray-200 min-h-44 rounded-xl p-4 mt-4">
      <div className="w-full min-h-40 flex flex-col justify-between gap-4">
        {/* Heading */}
        <div>
          <h1 className="text-xl md:text-2xl">{issueTitle}</h1>
        </div>
        <div>
          <h2 className="text-lg md:text-xl">{issuer}</h2>
        </div>
        {/* Tags - mapped through the incoming issueTag prop */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {issueTags?.map((tag: string) => {
            const match = TAG_STYLES.find(
              (t) => t.name.toLowerCase() === tag.toLowerCase()
            );

            return (
              <span
                key={tag}
                className={`py-1 px-2 rounded-full ${
                  match?.custom ? match.bg : ""
                }`}
                style={
                  !match?.custom
                    ? { backgroundColor: match?.bg || "#e5e7eb" }
                    : {}
                }
              >
                <p className={match?.text || "text-gray-700"}>{tag}</p>
              </span>
            );
          })}
        </div>
        {/* Language and Activity */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {issueLanguages?.map((lang: string) => {
            const match = LANGUAGE_COLORS.find(
              (l) => l.name.toLowerCase() === lang.toLowerCase()
            );

            return (
              <div key={lang} className="flex items-center gap-1">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: match ? match.color : "#ccc" }}
                ></div>
                <p>{lang}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <p>Updated {issueLastUpdate} days ago</p>
        </div>
      </div>
      <div className="bg-gray-400 text-black dark:bg-black dark:text-white p-2 border border-gray-500 rounded-xl w-40 -ml-2 mt-4">
        <a href="https://github.com" target="_blank">
          {" "}
          Apply for this issue
        </a>
      </div>
    </div>
  );
};

export default IssuesCard;
