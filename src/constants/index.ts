//Issue tags
export const TAG_STYLES = [
  { name: "bug", bg: "#d73a4a", text: "text-red-200" },
  { name: "documentation", bg: "#0075ca", text: "text-blue-200" },
  { name: "duplicate", bg: "#cfd3d7", text: "text-neutral-700" },
  { name: "enhancement", bg: "#a2eeef", text: "text-cyan-700" },
  { name: "good first issue", bg: "#7057ff", text: "text-purple-200" },
  { name: "help wanted", bg: "#018672", text: "text-teal-200" },
  { name: "invalid", bg: "#e4e668", text: "text-yellow-700" },
  { name: "question", bg: "#d876e3", text: "text-pink-200" },
  {
    name: "wontfix",
    bg: "bg-gray-700 dark:bg-white",
    text: "text-white dark:text-gray-700",
    custom: true,
  },
];
//Issue languages used
export const LANGUAGE_COLORS = [
  { name: "JavaScript", color: "#f1e05a" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "HTML", color: "#e34c26" },
  { name: "CSS", color: "#563d7c" },
  { name: "Python", color: "#3572A5" },
  { name: "Java", color: "#b07219" },
  { name: "C++", color: "#f34b7d" },
  { name: "C#", color: "#178600" },
  { name: "Go", color: "#00ADD8" },
  { name: "PHP", color: "#4F5D95" },
  { name: "Ruby", color: "#701516" },
  { name: "Swift", color: "#ffac45" },
  { name: "Kotlin", color: "#A97BFF" },
  { name: "Shell", color: "#89e051" },
  { name: "Rust", color: "#dea584" },
  { name: "Dart", color: "#00B4AB" },
];

export const DUMMY_ISSUES = [
  {
    issueTitle: "Fix login button not responding on mobile",
    issuer: "openai/frontend-team",
    issueTags: ["bug", "frontend", "urgent"],
    issueLanguages: ["JavaScript", "CSS"],
    issueLastUpdate: "2",
  },
  {
    issueTitle: "Add dark mode toggle to the settings page",
    issuer: "shadowdev/ui-lab",
    issueTags: ["enhancement", "UI", "design"],
    issueLanguages: ["TypeScript", "React"],
    issueLastUpdate: "5",
  },
  {
    issueTitle: "Optimize image loading for performance",
    issuer: "webcraft/performance",
    issueTags: ["optimization", "performance"],
    issueLanguages: ["Next.js", "JavaScript"],
    issueLastUpdate: "1",
  },
  {
    issueTitle: "Create a reusable modal component",
    issuer: "devflow/components",
    issueTags: ["feature", "reusability", "UI"],
    issueLanguages: ["React", "TailwindCSS"],
    issueLastUpdate: "9",
  },
  {
    issueTitle: "Update dependencies to latest versions",
    issuer: "system/maintenance",
    issueTags: ["chore", "dependencies", "security"],
    issueLanguages: ["Node.js"],
    issueLastUpdate: "3",
  },
];
