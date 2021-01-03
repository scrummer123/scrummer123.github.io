import React from "react";
import { FaMoon } from "react-icons/fa";

import { useTheme } from "next-themes";

// My providers
import { useFrontEndData } from "@portfolio-providers/FrontEndDataProvider";

const Nav = () => {
  const { theme, setTheme } = useTheme();

  const {
    toggleScrolledPassed,
    frontEndData,
  }: FEDT.FrontEndDataContext = useFrontEndData();

  const toggleTheme = () => {
    const theme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
    setTheme(theme);
  };
  let observer;

  // Data to be loaded on client page load
  React.useEffect(() => {
    observer = new IntersectionObserver(([entry]) => toggleScrolledPassed());
    observer.observe(document.querySelector("#infoBox")!);
  }, []);

  return (
    <div>
      <div id="infoBox">
        <button
          aria-label={"Show work experience"}
          className="w-full rounded-none hover:bg-indigo-500 shadow-none"
        >
          Bekijk werkervaring
        </button>
      </div>
      <div className="sticky top-0 w-full bg-indigo-navbarLight dark:bg-indigo-navbar">
        <div
          data-stuck={frontEndData.scrolledPassed}
          className=" flex justify-between"
        >
          <h1 className="text-5xl font-rewind mt-1.5">Simon</h1>
          <div>
            <a href="/?status=WIP">Home</a>
            <a href="/?status=WIP">About</a>

            <button
              aria-label={"Toggle dark mode"}
              onClick={() => toggleTheme()}
              className="bg-gray-300 dark:bg-indigo-900 my-4 shadow-none"
            >
              <FaMoon size="15px" color={theme === "dark" ? "#fff" : "#000"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
