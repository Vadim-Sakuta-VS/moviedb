export const CHANGE_PAGE = 'MOVIE_LIST/CHANGE_PAGE';
export const SET_TOTAL_PAGES = 'MOVIE_LIST/SET_TOTAL_PAGES';
export const SET_MOVIES_TYPE_LOADING = 'MOVIE_LIST/SET_MOVIES_TYPE_LOADING';
export const SET_MOVIES = 'MOVIE_LIST/SET_MOVIES';
export const UPDATE_DATA = 'MOVIE_LIST/UPDATE_DATA';

export const setMoviesTypeLoading = (isLoading) => ({
  type: SET_MOVIES_TYPE_LOADING,
  payload: isLoading,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});

export const setTotalPages = (totalPages) => ({
  type: SET_TOTAL_PAGES,
  payload: totalPages,
});

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const updateData = () => ({ type: UPDATE_DATA });
