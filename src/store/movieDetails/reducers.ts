import {
  MovieDetailsAction,
  MovieDetailsActions,
  MovieDetailsState,
} from './types';
import { IMovieAccountState, IVideo } from '../../types/entities';

export enum MovieTypesOnlyBooleanState {
  favorite = 'favorite',
  watchlist = 'watchlist',
}

export enum MovieTypesCustomListsLoadingState {
  isLoadingStatus = 'isLoadingStatus',
  isSubmitLoading = 'isSubmitLoading',
}

export const initialMovieAccountState: IMovieAccountState = {
  id: 0,
  favorite: false,
  rated: false,
  watchlist: false,
};

export const initialMovieVideoState: IVideo = {
  id: '',
  key: '',
  site: '',
  size: '',
  name: '',
  type: '',
  iso_639_1: '',
  iso_3166_1: '',
};

const initialState: MovieDetailsState = {
  movieListsAccountState: {
    data: initialMovieAccountState,
    isLoading: false,
    stateListsLoading: { favorite: false, watchlist: false },
  },
  custom_lists: {
    data: [],
    loading: {
      isLoadingStatus: false,
      isSubmitLoading: false,
    },
  },
};

function movieDetailsReducer(
  state = initialState,
  action: MovieDetailsAction
): MovieDetailsState {
  switch (action.type) {
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
    case MovieDetailsActions.SET_MOVIE_ACCOUNT_STATE_LOADING:
      return {
        ...state,
        movieListsAccountState: {
          ...state.movieListsAccountState,
          isLoading: action.payload,
        },
      };
    case MovieDetailsActions.SET_MOVIE_TO_BASIC_LIST_LOADING:
      return {
        ...state,
        movieListsAccountState: {
          ...state.movieListsAccountState,
          stateListsLoading: {
            ...state.movieListsAccountState.stateListsLoading,
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
    case MovieDetailsActions.SET_MOVIE_CUSTOM_LISTS_DATA:
      return {
        ...state,
        custom_lists: {
          ...state.custom_lists,
          data: action.payload,
        },
      };
    case MovieDetailsActions.SET_MOVIE_CUSTOM_LISTS_LOADING:
      return {
        ...state,
        custom_lists: {
          ...state.custom_lists,
          loading: {
            ...state.custom_lists.loading,
            [action.payload.type]: action.payload.isLoading,
          },
        },
      };
    case MovieDetailsActions.ADD_MOVIE_CUSTOM_LISTS:
      return {
        ...state,
        custom_lists: {
          ...state.custom_lists,
          data: state.custom_lists.data.filter(
            (list) => !action.payload.includes(+list.id)
          ),
        },
      };
    default:
      return state;
  }
}

export { movieDetailsReducer };
