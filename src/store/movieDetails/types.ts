import {
  IMovie,
  IMovieAccountState,
  IMovieBasicListLoading,
} from '../../types/entities';

export enum MovieDetailsActions {
  SET_MOVIE_DETAILS = 'MOVIE_DETAILS/SET_MOVIE_DETAILS',
  SET_TYPE_LOADING = 'MOVIE_DETAILS/SET_TYPE_LOADING',
  SET_MOVIE_RATING = 'MOVIE_DETAILS/SET_MOVIE_RATING',
  SET_MOVIE_TO_BASIC_LIST = 'MOVIE_DETAILS/SET_MOVIE_TO_BASIC_LIST',
  SET_MOVIE_TO_BASIC_LIST_LOADING = 'MOVIE_DETAILS/SET_MOVIE_TO_BASIC_LIST_LOADING',
  SET_MOVIE_ACCOUNT_STATE = 'MOVIE_DETAILS/SET_MOVIE_ACCOUNT_STATE',
}

export interface SetMovieDetailsAction {
  type: MovieDetailsActions.SET_MOVIE_DETAILS;
  payload: IMovie;
}

export interface SetTypeLoadingAction {
  type: MovieDetailsActions.SET_TYPE_LOADING;
  payload: boolean;
}

export interface setMovieRatingAction {
  type: MovieDetailsActions.SET_MOVIE_RATING;
  payload: number;
}

export interface setMovieAccountStateAction {
  type: MovieDetailsActions.SET_MOVIE_ACCOUNT_STATE;
  payload: IMovieAccountState;
}

export interface setMovieToBasicListAction {
  type: MovieDetailsActions.SET_MOVIE_TO_BASIC_LIST;
  payload: { type: string; value: boolean };
}

export interface setMovieToBasicListLoadingAction {
  type: MovieDetailsActions.SET_MOVIE_TO_BASIC_LIST_LOADING;
  payload: { type: string; isLoading: boolean };
}

export type MovieDetailsAction =
  | SetMovieDetailsAction
  | SetTypeLoadingAction
  | setMovieRatingAction
  | setMovieAccountStateAction
  | setMovieToBasicListAction
  | setMovieToBasicListLoadingAction;

export interface MovieDetailsState {
  isLoading: boolean;
  movie: IMovie;
  movieListsAccountState: {
    data: IMovieAccountState;
    stateLoading: IMovieBasicListLoading;
  };
}
