import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./common/pages/NotFoundPage";
import ShowDetailsPage from "./shows/ShowDetailsPage";

// pages import
import EpisodeDetailsPage from "./shows/episodes/EpisodeDetailsPage";

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
