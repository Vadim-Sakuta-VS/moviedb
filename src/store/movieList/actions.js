export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES';

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});

export const setTotalPages = (totalPages) => ({
  type: SET_TOTAL_PAGES,
  payload: totalPages,
});

export const setPopularMovies = (movies) => ({
  type: SET_POPULAR_MOVIES,
  payload: movies,
});
