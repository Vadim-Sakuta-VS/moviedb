import {
  MovieDetailsAction,
  MovieDetailsActions,
  MovieDetailsState,
} from './types';

const initialState: MovieDetailsState = {
  isLoading: false,
  movie: {
    id: 0,
    poster_path: '',
    title: '',
    overview: '',
    vote_average: 0,
    vote_count: 0,
    release_date: '',
  },
};

function movieDetailsReducer(
  state = initialState,
  action: MovieDetailsAction
): MovieDetailsState {
  switch (action.type) {
    case MovieDetailsActions.SET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload,
        isLoading: false,
      };
    case MovieDetailsActions.SET_TYPE_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export { movieDetailsReducer };
