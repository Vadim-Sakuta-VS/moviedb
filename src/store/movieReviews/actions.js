export const SET_MOVIE_ID = 'SET_MOVIE_ID';
export const SET_MOVIES_REVIEWS = 'SET_MOVIES_REVIEWS';
export const SHOW_LOADING = 'MOVIES_REVIEWS/SHOW_LOADING';
export const HIDE_LOADING = 'MOVIES_REVIEWS/HIDE_LOADING';
export const CHANGE_PAGE = 'MOVIES_REVIEWS/CHANGE_PAGE';
export const SET_TOTAL_PAGES = 'MOVIES_REVIEWS/SET_TOTAL_PAGES';

export const setMovieId = (id) => ({
  type: SET_MOVIE_ID,
  payload: id,
});

export const showLoading = () => ({
  type: SHOW_LOADING,
});

export const hideLoading = () => ({
  type: HIDE_LOADING,
});

export const setMovieReviews = (reviews) => ({
  type: SET_MOVIES_REVIEWS,
  payload: reviews,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});

export const setTotalPages = (totalPages) => ({
  type: SET_TOTAL_PAGES,
  payload: totalPages,
});
