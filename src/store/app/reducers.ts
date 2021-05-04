import { AppAction, AppState, SET_TYPE_LOADING } from './types';

const initialState: AppState = {
  isLoading: true,
};

function appReducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case SET_TYPE_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export { appReducer };
