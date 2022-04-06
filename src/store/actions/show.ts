import { Dispatch } from "react";
import { IShow } from "../../interface/show.interface";
import { AppActions } from "../actions.types";

export const loadShow = (show: IShow): AppActions => ({
  type: "LOAD_SHOW",
  show,
});

export const startLoadShow = (show: IShow) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(loadShow(show));
  };
};
