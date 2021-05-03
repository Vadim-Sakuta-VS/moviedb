import { RootState } from '../rootStore';
import { IMovie, IMovieAccountState } from '../../types/entities';

export const selectMovieDetails = (state: RootState): IMovie =>
  state.movieDetails.movie;
export const selectMovieDetailsLoading = (state: RootState): boolean =>
  state.movieDetails.isLoading;
export const selectMovieAccountState = (state: RootState): IMovieAccountState =>
  state.movieDetails.movieAccountState;
