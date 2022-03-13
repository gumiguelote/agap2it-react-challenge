import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import EpisodeDetailsCard from "./EpisodeDetailsCardComponent";

// interface IEpisodeDetailsPageProps {}

const EpisodeDetailsPage: React.FC = () => {
  return (
    <>
      <EpisodeDetailsCard />
      <Link to="/">
        <Button>Back to List</Button>
      </Link>
    </>
  );
};

export default EpisodeDetailsPage;
