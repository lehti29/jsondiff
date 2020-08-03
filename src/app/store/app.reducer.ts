import * as actions from './app.actions';

export interface State {
  files: JSONFileModel[];
  selectedFile: JSONFileModel;
}

export const initialState: State = {
  files: [],
  selectedFile: null
};

export function reducer(state = initialState, action: actions.AppActionsUnion): State {
  switch (action.type) {

    case actions.addFile.type:
      return {
        ...state,
        files: [...state.files, action.file]
      };

    case actions.setSelectedFile.type:
      return {
        ...state,
        selectedFile: action.file
      };

    default:
      return state;
  }
}

export interface JSONFileModel {
  name: string;
  content?: JSONContentModel;
}

export interface JSONContentModel {
  key: string;
  value: string;
}
