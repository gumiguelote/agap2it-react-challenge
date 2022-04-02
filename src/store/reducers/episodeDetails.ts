import { IEpisodeDetails } from "../../interface/episodeDetails.interface";
import { LOAD_EPISODE_DETAILS, ShowsActionTypes } from "../actions.types";

const episodeDetailsReducerDefaultState: IEpisodeDetails = {
  name: "",
  summary: "",
  image: {
    medium: "",
  },
};

const episodeDetailsReducer = (
  state = episodeDetailsReducerDefaultState,
  action: ShowsActionTypes,
): IEpisodeDetails => {
  switch (action.type) {
    case LOAD_EPISODE_DETAILS:
      return action.episodeDetails;
    default:
      return state;
  }
};

export { episodeDetailsReducer };
