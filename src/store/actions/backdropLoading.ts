import { Dispatch } from "react";
import { AppActions } from "../actions.types";

export const controlBackdrop = (isLoading: boolean): AppActions => ({
  type: "CONTROL_BACKDROP",
  isLoading,
});

export const startControlBackdrop = (isLoading: boolean) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(controlBackdrop(isLoading));
  };
};
