import React from "react";

import {
  FrontEndDataContext,
  useFrontEndData,
} from "../providers/FrontEndDataProvider";

const Home: React.FC<any> = ({ data }) => {
  const scrollOne = React.useRef(null);
  const { frontEndData }: FrontEndDataContext = useFrontEndData();

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
    <div>
      <div data-stuck={frontEndData.scrolledPassed} />
      <div className="flex">
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
    </div>
  );
};

export default Home;
