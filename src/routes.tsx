import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./common/pages/NotFoundPage";
import ShowDetailsPage from "./shows/ShowDetails.page";

// pages import
import EpisodeDetailsPage from "./shows/episodes/EpisodeDetails.page";

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
