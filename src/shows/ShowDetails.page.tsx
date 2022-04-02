import React from "react";
import ShowCard from "./ShowCard.component";
import ShowEpisodesCard from "./ShowEpisodesCard.component";

const ShowDetailsPage: React.FC = () => {
  return (
    <>
      <ShowCard />
      <ShowEpisodesCard />
    </>
  );
};

export default ShowDetailsPage;
