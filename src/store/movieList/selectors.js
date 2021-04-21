export const selectCurrentPage = (state) => state.movieList.currentPage;
export const selectTotalPages = (state) => state.movieList.totalPages;
export const selectMovieList = (state) => state.movieList.data;
export const selectMovieListLoading = (state) => state.movieList.isLoading;
