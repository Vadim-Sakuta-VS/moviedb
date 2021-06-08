import { IMovie } from '../../types/entities';

export enum MovieListActions {
  SET_TOTAL_PAGES = 'MOVIE_LIST/SET_TOTAL_PAGES',
  SET_MOVIES_TYPE_LOADING = 'MOVIE_LIST/SET_MOVIES_TYPE_LOADING',
  SET_MOVIES = 'MOVIE_LIST/SET_MOVIES',
}

export interface SetTotalPagesAction {
  type: MovieListActions.SET_TOTAL_PAGES;
  payload: number;
}

export interface SetMoviesTypeLoadingAction {
  type: MovieListActions.SET_MOVIES_TYPE_LOADING;
  payload: boolean;
}

export interface SetMoviesAction {
  type: MovieListActions.SET_MOVIES;
  payload: IMovie[];
}

export type MovieListAction =
  | SetTotalPagesAction
  | SetMoviesTypeLoadingAction
  | SetMoviesAction;

export interface MovieListState {
  data: IMovie[];
  totalPages: number;
  isLoading: boolean;
  movieType: string;
}
