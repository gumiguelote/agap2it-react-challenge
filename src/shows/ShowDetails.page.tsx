import React from "react";
import { useSelector } from "../hooks/useTypeSelector";
import { IEpisode } from "../interface/episodes.interface";
import ShowCard from "./ShowCard.component";
import ShowEpisodesCard from "./ShowEpisodesCard.component";

const ShowDetailsPage: React.FC = () => {
  const { show, episodes } = useSelector((state) => state);

  // FIX
  const groupEpisodesBySeason = (episodesArray: IEpisode[]): IEpisode[] => {
    return episodesArray.reduce((seasons: IEpisode[], episode: IEpisode) => {
      const episodesList = seasons[episode.season] || [];
      episodesList.push(episode);
      seasons[episode.season] = episodesList;
      return seasons;
    }, []);
  };

  return (
    <>
      <ShowCard showProps={show} />
      <ShowEpisodesCard seasons={groupEpisodesBySeason(episodes)} />
    </>
  );
};

export default ShowDetailsPage;
