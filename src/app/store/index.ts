import * as reducer from './app.reducer';

import { ActionReducer, createSelector, ActionReducerMap } from '@ngrx/store';

export import State = reducer.State;

const getAppState = (state: AppState) => state;

export const getFiles = createSelector(
  getAppState,
  state => state.root.files
);

export const getSelectedFile = createSelector(
  getAppState,
  state => state.root.selectedFile
);

export interface AppState {
  root: reducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
  root: reducer.reducer
};
