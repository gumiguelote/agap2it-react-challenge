import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "./actions.types";
import { episodeDetailsReducer } from "./reducers/episodeDetails";
import { episodesReducer } from "./reducers/episodes";
import { showReducer } from "./reducers/shows";

export const rootReducer = combineReducers({
  show: showReducer,
  episodes: episodesReducer,
  episodeDetails: episodeDetailsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
);
