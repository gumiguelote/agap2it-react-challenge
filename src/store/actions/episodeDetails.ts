import { Dispatch } from "react";
import { IEpisodeDetails } from "../../interface/episodeDetails.interface";
import { AppActions } from "../actions.types";

export const loadEpisodesDetails = (
  episodeDetails: IEpisodeDetails,
): AppActions => ({
  type: "LOAD_EPISODE_DETAILS",
  episodeDetails,
});

export const startLoadEpisodeDetails = (episodeDetails: IEpisodeDetails) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(loadEpisodesDetails(episodeDetails));
  };
};
