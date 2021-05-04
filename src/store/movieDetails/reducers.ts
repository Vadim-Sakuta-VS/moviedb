import {
  MovieDetailsAction,
  MovieDetailsActions,
  MovieDetailsState,
} from './types';
import { IMovieAccountState } from '../../types/entities';

export enum MovieTypesOnlyBooleanState {
  favorite = 'favorite',
  watchlist = 'watchlist',
}

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
  movieListsAccountState: {
    data: initialMovieAccountState,
    stateLoading: { favorite: false, watchlist: false },
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
      };
    case MovieDetailsActions.SET_TYPE_LOADING:
      return { ...state, isLoading: action.payload };
    case MovieDetailsActions.SET_MOVIE_RATING:
      return {
        ...state,
        movieListsAccountState: {
          ...state.movieListsAccountState,
          data: {
            ...state.movieListsAccountState.data,
            rated: {
              value: action.payload,
            },
          },
        },
      };
    case MovieDetailsActions.SET_MOVIE_ACCOUNT_STATE:
      return {
        ...state,
        movieListsAccountState: {
          ...state.movieListsAccountState,
          data: action.payload,
        },
      };
    case MovieDetailsActions.SET_MOVIE_TO_BASIC_LIST_LOADING:
      return {
        ...state,
        movieListsAccountState: {
          ...state.movieListsAccountState,
          stateLoading: {
            ...state.movieListsAccountState.stateLoading,
            [action.payload.type]: action.payload.isLoading,
          },
        },
      };
    case MovieDetailsActions.SET_MOVIE_TO_BASIC_LIST:
      return {
        ...state,
        movieListsAccountState: {
          ...state.movieListsAccountState,
          data: {
            ...state.movieListsAccountState.data,
            [action.payload.type]: action.payload.value,
          },
        },
      };
    default:
      return state;
  }
}

export { movieDetailsReducer };
