import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IEpisodeDetails } from "../../interface/episodeDetails.interface";
import { getEpisodeDetail } from "../../service/endpoints.service";
import EpisodeDetailsCard from "./EpisodeDetailsCard.component";

// interface IEpisodeDetailssPageProps {}

const initialState: IEpisodeDetails = {
  name: "",
  summary: "",
  image: {
    medium: "",
  },
};

const EpisodeDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState<IEpisodeDetails>(initialState);

  useEffect(() => {
    const fetchEpisodeDetails = async (episodeId: string): Promise<void> => {
      setEpisode(await getEpisodeDetail(episodeId));
    };
    fetchEpisodeDetails(id?.toString() || "");
  }, [id]);

  return <EpisodeDetailsCard episode={episode} />;
};

export default EpisodeDetailsPage;
