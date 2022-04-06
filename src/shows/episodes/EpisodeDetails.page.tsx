import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLoadEpisodeDetails } from "../../store/actions/episodeDetails";
import { getEpisodeDetail } from "../../service/endpoints.service";
import EpisodeDetailsCard from "./EpisodeDetailsCard.component";
import { startControlBackdrop } from "../../store/actions/backdropLoading";

const EpisodeDetailsPage: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const id = params.id!;

  useEffect(() => {
    const fetchEpisodeDetails = async (episodeId: string): Promise<void> => {
      dispatch(startLoadEpisodeDetails(await getEpisodeDetail(episodeId)));
      dispatch(startControlBackdrop(false));
    };
    fetchEpisodeDetails(id);
  }, [id, dispatch]);

  return <EpisodeDetailsCard />;
};

export default EpisodeDetailsPage;
