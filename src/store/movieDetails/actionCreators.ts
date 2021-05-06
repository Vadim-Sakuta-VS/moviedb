import {
  MovieDetailsAction,
  MovieDetailsActions,
  setMovieAccountStateAction,
  setMovieAccountStateLoadingAction,
  setMovieRatingAction,
  setMovieToBasicListAction,
  setMovieToBasicListLoadingAction,
  SetTypeLoadingAction,
} from './types';
import { IMovie, IMovieAccountState } from '../../types/entities';

export const setMovieDetails = (movie: IMovie): MovieDetailsAction => ({
  type: MovieDetailsActions.SET_MOVIE_DETAILS,
  payload: movie,
});

export const setTypeLoading = (isLoading: boolean): SetTypeLoadingAction => ({
  type: MovieDetailsActions.SET_TYPE_LOADING,
  payload: isLoading,
});

export const setMovieRating = (value: number): setMovieRatingAction => ({
  type: MovieDetailsActions.SET_MOVIE_RATING,
  payload: value,
});

export const setMovieAccountState = (
  movieAccountState: IMovieAccountState
): setMovieAccountStateAction => ({
  type: MovieDetailsActions.SET_MOVIE_ACCOUNT_STATE,
  payload: movieAccountState,
});

export const setMovieAccountStateLoading = (
  isLoading: boolean
): setMovieAccountStateLoadingAction => ({
  type: MovieDetailsActions.SET_MOVIE_ACCOUNT_STATE_LOADING,
  payload: isLoading,
});

export const setMovieToBasicList = (
  type: string,
  value: boolean
): setMovieToBasicListAction => ({
  type: MovieDetailsActions.SET_MOVIE_TO_BASIC_LIST,
  payload: { type, value },
});

export const setMovieToBasicListLoading = (
  type: string,
  isLoading: boolean
): setMovieToBasicListLoadingAction => ({
  type: MovieDetailsActions.SET_MOVIE_TO_BASIC_LIST_LOADING,
  payload: { type, isLoading },
});
