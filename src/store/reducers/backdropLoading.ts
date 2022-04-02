import { CONTROL_BACKDROP, ShowsActionTypes } from "../actions.types";

const backdropLoadingReducerDefaultState = true;

const backdropLoadingReducer = (
  state = backdropLoadingReducerDefaultState,
  action: ShowsActionTypes,
): boolean => {
  switch (action.type) {
    case CONTROL_BACKDROP:
      return action.isLoading;
    default:
      return state;
  }
};

export { backdropLoadingReducer };
