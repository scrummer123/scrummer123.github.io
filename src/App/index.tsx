import React from "react";

import { useThemeData, ThemeProvider } from '../Providers/ThemeProvider';
import BackdropFilter from 'react-backdrop-filter';
import { FaMoon } from 'react-icons/fa';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppData/>
    </ThemeProvider>
  );
};

const AppData: React.FC = () => {
  const { theme, toggleTheme } = useThemeData();
  const scrollOne = React.useRef(null);
  const [scrolledPassed, setScrolledPassed] = React.useState<true | false>(false);
  const [projectsData, setProjectsData] = React.useState<any>(undefined);
  const observer = new IntersectionObserver( 
    ([entry]) => setScrolledPassed(!entry.isIntersecting),
  );

  React.useEffect(() => {
    observer.observe(document.querySelector("#infoBox")!);

    try {
      const fetchOpts: RequestInit = {
        method: "GET",
        headers: {
          Accept: "application/json",
        }
      };
      fetch("https://api.github.com/users/scrummer123/repos", fetchOpts)
        .then(response => response.json())
        .then(data => setProjectsData(data))
    } catch (e) {
      console.error(e);
    }
  }, []);

  const renderProjects = (project, key) => (
    <a href={project.html_url} rel="noopener" target="_blank" key={key} className="project-item">
      <span className="font-nunito text-xl">{project.name}</span>
      <p>{project.description}</p>
    </a>
  );

  return (
    <>
      <div id="infoBox">
        <button aria-label={"Show work experience"} className="w-full rounded-none hover:bg-indigo-500 shadow-none">Bekijk werkervaring</button>
      </div>
      <div className="navbar">
        <BackdropFilter 
          filter="blur(20px)"
        >
          <div data-stuck={scrolledPassed} className="custom-container flex justify-between">
            <h1 className="text-5xl font-rewind mt-1.5">Simon</h1>
            <div className="nav-container">
              <a href="/?status=WIP" className="nav-item">Home</a>
              <a href="/?status=WIP" className="nav-item">About</a>

              <button aria-label={"Toggle dark mode"} onClick={() => toggleTheme()} className="icon-button dark:bg-indigo-900 my-4 shadow-none">
                <FaMoon size="15px" color={theme === "dark" ? "#fff" : "#000"}/>
              </button>
            </div>
          </div>
        </BackdropFilter>
      </div>
      <div id="custom-container-root" data-stuck={scrolledPassed}/>
      <div className="custom-container-narrow">
        <div className="flex-1 lg:flex-2 hidden sm:block h-full">
          <img width={"100%"} height={"100%"} className="rounded-full" src="https://media-exp1.licdn.com/dms/image/C4E03AQGZZDqp3vfasg/profile-displayphoto-shrink_200_200/0/1601467742169?e=1614816000&v=beta&t=aXlM11PN9x69lzEng-gNbnOFQ5NeQrKJsayXwDF5-tg" alt="me"/>
        </div>
        <div className="flex-2 lg:flex-5 2xl:flex-6 ml-0 sm:ml-6 xl:ml-12">
          <h1 className="font-nunito my-2">Wie ben ik?</h1>
          <p>
            Leuk dat je besloot een kijkje te nemen naar mijn personalia.
            Mijn naam is Simon, ik ben een software ontwikkelaar met veel passie en ambitie voor alles wat ik maak. 
            Wil je meer over mij weten? Neem dan een kijkje op mijn site...
          </p>
          <button aria-label={"Scroll down"} className="mt-4" onClick={() => scrollOne.current.scrollIntoView()}>Lees meer</button>
        </div>
      </div>
      <div className="custom-container-narrow flex-col my-5" id="projectsContainer" ref={scrollOne}>
        <h1 className="font-nunito mb-5 mt-24 cursor-pointer" onClick={() => scrollOne.current.scrollIntoView()}>Projecten</h1>
        {projectsData && projectsData.map(renderProjects)}
      </div>
    </>
  );

}

export default App;
