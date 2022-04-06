import { Dispatch } from "react";
import { IEpisode } from "../../interface/episode.interface";
import { AppActions } from "../actions.types";

export const loadEpisodes = (episodes: IEpisode[]): AppActions => ({
  type: "LOAD_EPISODES",
  episodes,
});

export const startLoadEpisodes = (episodes: IEpisode[]) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(loadEpisodes(episodes));
  };
};
