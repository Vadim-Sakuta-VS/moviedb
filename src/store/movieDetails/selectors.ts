import { RootState } from '../rootStore';
import {
  IMovieAccountState,
  IMovieBasicListLoading,
} from '../../types/entities';

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
