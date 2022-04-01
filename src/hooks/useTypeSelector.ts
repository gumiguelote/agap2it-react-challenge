import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";

import { AppState } from "../store/configuration.store";

export const useSelector: TypedUseSelectorHook<AppState> = _useSelector;
