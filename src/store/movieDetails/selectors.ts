import { RootState } from '../rootStore';
import { IMovie } from '../../types/entities';

export const selectMovieDetails = (state: RootState): IMovie =>
  state.movieDetails.movie;
export const selectMovieDetailsLoading = (state: RootState): boolean =>
  state.movieDetails.isLoading;
