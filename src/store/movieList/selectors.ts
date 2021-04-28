import { RootState } from '../rootStore';
import { IMovie } from '../../types/entities';

export const selectCurrentPage = (state: RootState): number =>
  state.movieList.currentPage;
export const selectTotalPages = (state: RootState): number =>
  state.movieList.totalPages;
export const selectMovieList = (state: RootState): IMovie[] =>
  state.movieList.data;
export const selectMovieListLoading = (state: RootState): boolean =>
  state.movieList.isLoading;
