import React, { useEffect, useState } from "react";
import { IShow } from "../interface/shows.interface";
import { getEpisodes, getShow } from "../service/endpoints.service";
import ShowCard from "./ShowCardComponent";
import ShowEpisodesCard from "./ShowEpisodesCardComponent";

const SHOW_ID = "1955";

// change to initial state with redux
const initialState: IShow = {
  id: 0,
  name: "",
  rating: {
    average: 0,
  },
  summary: "",
  image: {
    original: "",
  },
};

const ShowDetailsPage: React.FC = () => {
  const [show, setShow] = useState<IShow>(initialState);
  const [episodesList, setEpisodesList] = useState<any>([]);

  // FIX
  const groupEpisodesBySeason = (array: any): any => {
    return array.reduce((seasons: any, episode: any) => {
      const episodes = seasons[episode.season] || [];
      episodes.push(episode);
      seasons[episode.season] = episodes;
      return seasons;
    }, []);
  };

  useEffect(() => {
    const fetchShowAction = async (): Promise<void> => {
      setShow(await getShow(SHOW_ID));
    };
    fetchShowAction();
  }, []);

  useEffect(() => {
    const fetchEpisodesList = async (): Promise<void> => {
      setEpisodesList(await getEpisodes(SHOW_ID));
    };
    fetchEpisodesList();
  }, []);

  return (
    <>
      <ShowCard showProps={show} />
      <ShowEpisodesCard seasons={groupEpisodesBySeason(episodesList)} />
    </>
  );
};

export default ShowDetailsPage;
