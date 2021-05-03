import {
  MovieDetailsAction,
  MovieDetailsActions,
  MovieDetailsState,
} from './types';
import { IMovieAccountState } from '../../types/entities';

export const initialMovieAccountState: IMovieAccountState = {
  id: 0,
  favorite: false,
  rated: false,
  watchlist: false,
};

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
  movieAccountState: initialMovieAccountState,
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
      };
    case MovieDetailsActions.SET_TYPE_LOADING:
      return { ...state, isLoading: action.payload };
    case MovieDetailsActions.SET_MOVIE_RATING:
      return {
        ...state,
        movieAccountState: {
          ...state.movieAccountState,
          rated: {
            value: action.payload,
          },
        },
      };
    case MovieDetailsActions.SET_MOVIE_ACCOUNT_STATE:
      return { ...state, movieAccountState: action.payload };
    default:
      return state;
  }
}

export { movieDetailsReducer };
