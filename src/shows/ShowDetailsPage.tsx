import React from "react";
import ShowCard from "./ShowCardComponent";
import ShowEpisodesCard from "./ShowEpisodesCardComponent";

// interface IShowDetailsPageProps {}

const ShowDetailsPage: React.FC = () => {
  return (
    <>
      <ShowCard />
      <ShowEpisodesCard />
    </>
  );
};

export default ShowDetailsPage;
