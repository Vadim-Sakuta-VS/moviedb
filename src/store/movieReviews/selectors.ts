import { RootState } from '../rootStore';
import { IReview } from '../../types/types';

export const selectMovieId = (state: RootState): number | null =>
  state.movieReviews.movieId;
export const selectMovieReviews = (state: RootState): IReview[] =>
  state.movieReviews.data;
export const selectMovieReviewsLoading = (state: RootState): boolean =>
  state.movieReviews.isLoading;
export const selectMovieReviewsCurrentPage = (state: RootState): number =>
  state.movieReviews.currentPage;
export const selectMovieReviewsTotalPages = (state: RootState): number | null =>
  state.movieReviews.totalPages;
