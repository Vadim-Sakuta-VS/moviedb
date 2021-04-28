import {
  MovieDetailsAction,
  MovieDetailsActions,
  SetTypeLoadingAction,
} from './types';
import { IMovie } from '../../types/entities';

export const setMovieDetails = (movie: IMovie): MovieDetailsAction => ({
  type: MovieDetailsActions.SET_MOVIE_DETAILS,
  payload: movie,
});

export const setTypeLoading = (isLoading: boolean): SetTypeLoadingAction => ({
  type: MovieDetailsActions.SET_TYPE_LOADING,
  payload: isLoading,
});
