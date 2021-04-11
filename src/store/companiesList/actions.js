export const SET_QUERY = 'SET_QUERY';
export const SET_COMPANIES = 'SET_COMPANIES';
export const UPDATE_COMPANIES = 'UPDATE_COMPANIES';
export const SHOW_LOADING = 'COMPANIES/SHOW_LOADING';
export const HIDE_LOADING = 'COMPANIES/HIDE_LOADING';
export const SHOW_LOADING_MORE = 'MOVIES_REVIEWS/SHOW_LOADING_MORE';
export const HIDE_LOADING_MORE = 'MOVIES_REVIEWS/HIDE_LOADING_MORE';
export const SET_TOTAL_PAGES = 'COMPANIES/SET_TOTAL_PAGES';

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});

export const setCompanies = (companies) => ({
  type: SET_COMPANIES,
  payload: companies,
});

export const updateCompanies = (companies) => ({
  type: UPDATE_COMPANIES,
  payload: companies,
});

export const showLoading = () => ({
  type: SHOW_LOADING,
});

export const hideLoading = () => ({
  type: HIDE_LOADING,
});

export const showLoadingMore = () => ({
  type: SHOW_LOADING_MORE,
});

export const hideLoadingMore = () => ({
  type: HIDE_LOADING_MORE,
});

export const setTotalPages = (totalPages) => ({
  type: SET_TOTAL_PAGES,
  payload: totalPages,
});
