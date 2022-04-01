import { Dispatch } from "react";
import { IEpisode } from "../../interface/episodes.interface";
import { AppActions } from "../actions.types";
import { AppState } from "../configuration.store";

export const loadEpisodes = (episodes: IEpisode[]): AppActions => ({
  type: "LOAD_EPISODES",
  episodes,
});

export const startLoadEpisodes = (episodes: IEpisode[]) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(loadEpisodes(episodes));
  };
};
