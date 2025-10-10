"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  // Detect and set initial theme on mount
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle between dark and light
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.theme = newTheme;
  };

  return (
    <div className="absolute top-4 right-4">
      <input
        id="darkmode-toggle"
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
        className="hidden"
      />
      <label
        htmlFor="darkmode-toggle"
        className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
      >
        {theme === "dark" ? (
          <Image
            src="./Sun.svg"
            alt="Sun Icon"
            width="24"
            height="24"
            className="w-6 h-6 text-yellow-400"
          />
        ) : (
          <Image
            src="./Moon.svg"
            alt="Moon Icon"
            width="24"
            height="24"
            className="w-6 h-6 text-gray-700"
          />
        )}
      </label>
    </div>
  );
}
