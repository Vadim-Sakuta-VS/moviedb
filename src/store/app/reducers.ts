import { AppAction, AppActions, AppState } from './types';

const initialState: AppState = {
  isLoading: true,
  hasError: false,
};

function appReducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case AppActions.SET_TYPE_LOADING:
      return { ...state, isLoading: action.payload };
    case AppActions.SET_APP_ERROR:
      return { ...state, hasError: action.payload };
    default:
      return state;
  }
}

export { appReducer };
