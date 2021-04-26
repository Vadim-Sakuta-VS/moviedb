import { IMovie } from '../../types/types';

export enum MovieDetailsActions {
  SET_MOVIE_DETAILS = 'MOVIE_DETAILS/SET_MOVIE_DETAILS',
  SET_TYPE_LOADING = 'MOVIE_DETAILS/SET_TYPE_LOADING',
}

export interface SetMovieDetailsAction {
  type: MovieDetailsActions.SET_MOVIE_DETAILS;
  payload: IMovie;
}

export interface SetTypeLoadingAction {
  type: MovieDetailsActions.SET_TYPE_LOADING;
  payload: boolean;
}

export type MovieDetailsAction = SetMovieDetailsAction | SetTypeLoadingAction;

export interface MovieDetailsState {
  isLoading: boolean;
  movie: IMovie;
}
