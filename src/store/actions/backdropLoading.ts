import { Dispatch } from "react";
import { AppActions } from "../actions.types";
import { AppState } from "../configuration.store";

export const controlBackdrop = (isLoading: boolean): AppActions => ({
  type: "CONTROL_BACKDROP",
  isLoading,
});

export const startControlBackdrop = (isLoading: boolean) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(controlBackdrop(isLoading));
  };
};
