import {
  MovieDetailsAction,
  MovieDetailsActions,
  setMovieAccountStateAction,
  setMovieRatingAction,
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
