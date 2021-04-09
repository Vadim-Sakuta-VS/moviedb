export const selectMovieReviews = (state) => state.movieReviews.data;
export const selectMovieReviewsLoading = (state) =>
  state.movieReviews.isLoading;
export const selectMovieReviewsCurrentPage = (state) =>
  state.movieReviews.currentPage;
export const selectMovieReviewsTotalPages = (state) =>
  state.movieReviews.totalPages;
