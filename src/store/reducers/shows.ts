import { IShow } from "../../interface/show.interface";
import { LOAD_SHOW, ShowsActionTypes } from "../actions.types";

const showReducerDefaultState: IShow = {
  id: 0,
  name: "",
  rating: {
    average: 0,
  },
  summary: "",
  image: {
    medium: "",
  },
};

const showReducer = (
  state = showReducerDefaultState,
  action: ShowsActionTypes,
): IShow => {
  switch (action.type) {
    case LOAD_SHOW:
      return action.show;
      break;
    default:
      return state;
  }
};

export { showReducer };
