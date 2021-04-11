import {
  hideLoading,
  hideLoadingMore,
  setCompanies,
  setTotalPages,
  showLoading,
  showLoadingMore,
  updateCompanies,
} from './actions';
import { ApiMovies } from '../../api/apiMovies';

export const searchCompaniesByQuery = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading());

      const query = getState().companiesList.query;
      const data = await ApiMovies.loadCompaniesByQuery(query, 1);

      const result = data.results.length ? data.results : 'Nothing found';

      dispatch(setCompanies(result));
      dispatch(setTotalPages(data.total_pages));
    } catch (e) {
      dispatch(hideLoading());
      console.log(e);
    }
  };
};

export const loadMoreCompaniesByQuery = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoadingMore());

      const query = getState().companiesList.query;
      const currentPage = getState().companiesList.currentPage;
      const data = await ApiMovies.loadCompaniesByQuery(query, currentPage + 1);

      dispatch(updateCompanies(data.results));
      dispatch(setTotalPages(data.total_pages));
    } catch (e) {
      dispatch(hideLoadingMore());
      console.log(e);
    }
  };
};
