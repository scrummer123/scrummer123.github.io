// Next stuff
import { GetStaticProps, InferGetStaticPropsType } from "next";

// React stuff
import React from "react";

// My components
import Nav from "../components/Nav";
import Home from "../components/Home";

export const getStaticProps: GetStaticProps = async () => {
  let repos: Fetch.Data = { props: {} };
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
  data,
  error,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div>
    <Nav />
    <Home data={data} />
  </div>
);

export default HomePage;
