import { IMovie, IMovieAccountState } from '../../types/entities';

export enum MovieDetailsActions {
  SET_MOVIE_DETAILS = 'MOVIE_DETAILS/SET_MOVIE_DETAILS',
  SET_TYPE_LOADING = 'MOVIE_DETAILS/SET_TYPE_LOADING',
  SET_MOVIE_RATING = 'MOVIE_DETAILS/SET_MOVIE_RATING',
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

export type MovieDetailsAction =
  | SetMovieDetailsAction
  | SetTypeLoadingAction
  | setMovieRatingAction
  | setMovieAccountStateAction;

export interface MovieDetailsState {
  isLoading: boolean;
  movie: IMovie;
  movieAccountState: IMovieAccountState;
}
