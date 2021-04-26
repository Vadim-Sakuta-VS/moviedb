import { IReview } from '../../types/types';

export enum MovieReviewsActions {
  SET_MOVIE_ID = 'MOVIES_REVIEWS/SET_MOVIE_ID',
  SET_MOVIES_REVIEWS = 'MOVIES_REVIEWS/SET_MOVIES_REVIEWS',
  SET_TYPE_LOADING = 'MOVIES_REVIEWS/SET_TYPE_LOADING',
  CHANGE_PAGE = 'MOVIES_REVIEWS/CHANGE_PAGE',
  SET_TOTAL_PAGES = 'MOVIES_REVIEWS/SET_TOTAL_PAGES',
}

export interface SetMovieIdAction {
  type: MovieReviewsActions.SET_MOVIE_ID;
  payload: number;
}

export interface SetMoviesReviewsAction {
  type: MovieReviewsActions.SET_MOVIES_REVIEWS;
  payload: IReview[];
}

export interface ChangePageAction {
  type: MovieReviewsActions.CHANGE_PAGE;
  payload: number;
}

export interface SetTotalPagesAction {
  type: MovieReviewsActions.SET_TOTAL_PAGES;
  payload: number;
}

export interface SetTypeLoadingAction {
  type: MovieReviewsActions.SET_TYPE_LOADING;
  payload: boolean;
}

export type MovieReviewsAction =
  | SetMovieIdAction
  | SetMoviesReviewsAction
  | ChangePageAction
  | SetTotalPagesAction
  | SetTypeLoadingAction;

export interface MovieReviewsState {
  movieId: number | null;
  data: IReview[];
  currentPage: number;
  totalPages: number | null;
  isLoading: boolean;
}
