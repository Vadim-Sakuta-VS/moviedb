import { HIDE_LOADING, SET_MOVIE_DETAILS, SHOW_LOADING } from './actions';

const initialState = {
  isLoading: false,
  movie: {},
};

function movieDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload,
        isLoading: false,
      };
    case SHOW_LOADING:
      return { ...state, isLoading: true };
    case HIDE_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export { movieDetailsReducer };
