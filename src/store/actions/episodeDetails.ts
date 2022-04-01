import { Dispatch } from "react";
import { IEpisodeDetails } from "../../interface/episodeDetails.interface";
import { AppActions } from "../actions.types";
import { AppState } from "../configuration.store";

export const loadEpisodesDetails = (
  episodeDetails: IEpisodeDetails,
): AppActions => ({
  type: "LOAD_EPISODE_DETAILS",
  episodeDetails,
});

export const startLoadEpisodeDetails = (episodeDetails: IEpisodeDetails) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(loadEpisodesDetails(episodeDetails));
  };
};
