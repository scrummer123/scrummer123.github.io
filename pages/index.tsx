// Next stuff
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

// React stuff
import React from "react";
import { FaMoon } from "react-icons/fa";

// My stuff
import { useThemeData } from "../providers/ThemeProvider";
import { FetchData } from "../types/pages/index.page";

export const getStaticProps: GetStaticProps = async () => {
  let repos: FetchData = { props: {} };
  try {
    const fetchOpts: RequestInit = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    const fetchedRepos = await fetch(
      "https://api.github.com/users/simon-instance/repos",
      fetchOpts
    );
    repos.props.data = await fetchedRepos.json();
  } catch (e) {
    repos.props.error = { error: e, message: e.message };
  }

  return repos;
};

const HomePage: React.FC = ({
  error,
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { theme, toggleTheme } = useThemeData();
  const scrollOne = React.useRef(null);
  const [scrolledPassed, setScrolledPassed] = React.useState<true | false>(
    false
  );
  let observer;

  // Data to be loaded on client page load
  React.useEffect(() => {
    observer = new IntersectionObserver(([entry]) =>
      setScrolledPassed(!entry.isIntersecting)
    );
    observer.observe(document.querySelector("#infoBox")!);
  }, []);

  const renderProjects = (project, key) => (
    <a
      href={project.html_url}
      rel="noopener"
      target="_blank"
      key={key}
      className="project-item"
    >
      <span className="font-nunito text-xl">{project.name}</span>
      <p>{project.description}</p>
    </a>
  );

  return (
    <>
      <div id="infoBox">
        <button
          aria-label={"Show work experience"}
          className="w-full rounded-none hover:bg-indigo-500 shadow-none"
        >
          Bekijk werkervaring
        </button>
      </div>
      <div className="navbar">
        <div
          data-stuck={scrolledPassed}
          className="custom-container flex justify-between"
        >
          <h1 className="text-5xl font-rewind mt-1.5">Simon</h1>
          <div className="nav-container">
            <a href="/?status=WIP" className="nav-item">
              Home
            </a>
            <a href="/?status=WIP" className="nav-item">
              About
            </a>

            <button
              aria-label={"Toggle dark mode"}
              onClick={() => toggleTheme()}
              className="icon-button dark:bg-indigo-900 my-4 shadow-none"
            >
              <FaMoon size="15px" color={theme === "dark" ? "#fff" : "#000"} />
            </button>
          </div>
        </div>
      </div>
      <div id="custom-container-root" data-stuck={scrolledPassed} />
      <div className="custom-container-narrow">
        <div className="lg:flex-2 sm:flex-1 hidden sm:block h-full">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGZZDqp3vfasg/profile-displayphoto-shrink_200_200/0/1601467742169?e=1614816000&v=beta&t=aXlM11PN9x69lzEng-gNbnOFQ5NeQrKJsayXwDF5-tg"
            alt="me"
            height="100%"
            width="100%"
            className="rounded-full"
          />
        </div>
        <div className="flex-2 lg:flex-5 2xl:flex-6 ml-0 sm:ml-6 xl:ml-12">
          <h1 className="font-nunito my-2">Wie ben ik?</h1>
          <p>
            Leuk dat je besloot een kijkje te nemen naar mijn personalia. Mijn
            naam is Simon, ik ben een software ontwikkelaar met veel passie en
            ambitie voor alles wat ik maak. Wil je meer over mij weten? Neem dan
            een kijkje op mijn site...
          </p>
          <button
            aria-label={"Scroll down"}
            className="mt-4"
            onClick={() => scrollOne.current.scrollIntoView()}
          >
            Lees meer
          </button>
        </div>
      </div>
      <div
        className="custom-container-narrow flex-col my-5"
        id="projectsContainer"
        ref={scrollOne}
      >
        <h1
          className="font-nunito mb-5 mt-24 cursor-pointer"
          onClick={() => scrollOne.current.scrollIntoView()}
        >
          Projecten
        </h1>
        {data && data.map(renderProjects)}
      </div>
    </>
  );
};

export default HomePage;
