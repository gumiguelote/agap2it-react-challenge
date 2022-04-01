import { IEpisodeDetails } from "../interface/episodeDetails.interface";
import { IEpisode } from "../interface/episodes.interface";
import { IShow } from "../interface/show.interface";

export const LOAD_SHOW = "LOAD_SHOW";
export const LOAD_EPISODES = "LOAD_EPISODES";
export const LOAD_EPISODE_DETAILS = "LOAD_EPISODE_DETAILS";

export interface LoadShowAction {
  type: typeof LOAD_SHOW;
  show: IShow;
}

export interface LoadEpisodesAction {
  type: typeof LOAD_EPISODES;
  episodes: IEpisode[];
}

export interface LoadEpisodeDetailAction {
  type: typeof LOAD_EPISODE_DETAILS;
  episodeDetails: IEpisodeDetails;
}

export type ShowsActionTypes =
  | LoadShowAction
  | LoadEpisodesAction
  | LoadEpisodeDetailAction;

export type AppActions = ShowsActionTypes;
