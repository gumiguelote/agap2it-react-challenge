import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IEpisodeDetail } from "../../interface/episodes.interface";
import { getEpisodeDetail } from "../../service/endpoints.service";
import EpisodeDetailsCard from "./EpisodeDetailsCardComponent";

// interface IEpisodeDetailsPageProps {}

const initialState: IEpisodeDetail = {
  name: "",
  summary: "",
  image: {
    original: "",
  },
};

const EpisodeDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState<IEpisodeDetail>(initialState);

  useEffect(() => {
    const fetchEpisodeDetails = async (episodeId: string): Promise<void> => {
      setEpisode(await getEpisodeDetail(episodeId));
    };
    fetchEpisodeDetails(id?.toString() || "");
  }, [id]);

  return <EpisodeDetailsCard episode={episode} />;
};

export default EpisodeDetailsPage;
