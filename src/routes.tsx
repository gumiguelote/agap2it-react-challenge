import React from "react";
import { Route, Routes } from "react-router-dom";

// pages import
import ShowDetailsPage from "./shows/ShowDetails.page";
import EpisodeDetailsPage from "./shows/episodes/EpisodeDetails.page";
import NotFoundPage from "./common/pages/NotFound.page";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ShowDetailsPage />} />
      <Route path="/:id/episode" element={<EpisodeDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
