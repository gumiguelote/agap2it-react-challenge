import { Dispatch } from "react";
import { IShow } from "../../interface/show.interface";
import { AppActions } from "../actions.types";
import { AppState } from "../configuration.store";

export const loadShow = (show: IShow): AppActions => ({
  type: "LOAD_SHOW",
  show,
});

export const startLoadShow = (show: IShow) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(loadShow(show));
  };
};
