import { IMovie } from '../../types/types';
import {
  MovieDetailsAction,
  MovieDetailsActions,
  SetTypeLoadingAction,
} from './types';

export const setMovieDetails = (movie: IMovie): MovieDetailsAction => ({
  type: MovieDetailsActions.SET_MOVIE_DETAILS,
  payload: movie,
});

export const setTypeLoading = (isLoading: boolean): SetTypeLoadingAction => ({
  type: MovieDetailsActions.SET_TYPE_LOADING,
  payload: isLoading,
});
