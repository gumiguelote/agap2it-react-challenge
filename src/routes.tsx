import React from "react";
import { Route, Routes } from "react-router-dom";

// pages import
import NotFoundPage from "./common/NotFoundPage";
import ShowDetailsPage from "./shows/EpisodeDetailsPage";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ShowDetailsPage />} />
      <Route path="/:id/episodes" element={<ShowDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
