import { createAction, props, union } from '@ngrx/store';
import { JSONFileModel } from './app.reducer';

export const addFile = createAction(
  '[App] Add File',
  props<{ file: JSONFileModel }>()
);

export const setSelectedFile = createAction(
  '[App] Set Selected File',
  props<{ file: JSONFileModel }>()
);

const appActions = union({
  addFile,
  setSelectedFile
});

export type AppActionsUnion = typeof appActions;
