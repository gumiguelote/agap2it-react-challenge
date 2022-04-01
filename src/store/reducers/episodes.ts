import { IEpisode } from "../../interface/episodes.interface";
import { LOAD_EPISODES, ShowsActionTypes } from "../actions.types";

const episodesReducerDefaultState: IEpisode[] = [];

const episodesReducer = (
  state = episodesReducerDefaultState,
  action: ShowsActionTypes,
): IEpisode[] => {
  switch (action.type) {
    case LOAD_EPISODES:
      return action.episodes;
      break;
    default:
      return state;
  }
};

export { episodesReducer };
