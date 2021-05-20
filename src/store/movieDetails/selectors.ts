import { RootState } from '../rootStore';
import {
  IMovie,
  IMovieAccountState,
  IMovieBasicListLoading,
} from '../../types/entities';

export const selectMovieDetails = (state: RootState): IMovie =>
  state.movieDetails.movie;
export const selectMovieDetailsLoading = (state: RootState): boolean =>
  state.movieDetails.isLoading;
export const selectMovieAccountState = (state: RootState): IMovieAccountState =>
  state.movieDetails.movieListsAccountState.data;
export const selectMovieAccountStateLoading = (state: RootState): boolean =>
  state.movieDetails.movieListsAccountState.isLoading;
export const selectMovieBasicListLoading = (
  state: RootState
): IMovieBasicListLoading =>
  state.movieDetails.movieListsAccountState.stateListsLoading;
export const selectMovieCustomLists = (state: RootState) =>
  state.movieDetails.custom_lists.data;
export const selectMovieCustomListsLoading = (state: RootState) =>
  state.movieDetails.custom_lists.loading;
export const selectMovieVideo = (state: RootState) => state.movieDetails.video;
