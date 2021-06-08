import { AppAction, AppActions, AppState } from './types';

const initialState: AppState = {
  hasError: false,
};

function appReducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case AppActions.SET_APP_ERROR:
      return { ...state, hasError: action.payload };
    default:
      return state;
  }
}

export { appReducer };
