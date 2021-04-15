import {
  hideLoading,
  hideLoadingMore,
  setCompanies,
  setTotalPages,
  showLoading,
  showLoadingMore,
  updateCompanies,
} from './actions';
import { ApiCompanies } from '../../api/apiCompanies';
import { selectCompaniesCurrentPage, selectQuery } from './selectors';

export const searchCompaniesByQuery = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading());

      const query = selectQuery(getState());
      const data = await ApiCompanies.loadCompaniesByQuery({
        query,
        page: 1,
      });

      const result =
        data.results && data.results.length ? data.results : 'Nothing found';

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

      const query = selectQuery(getState());
      const currentPage = selectCompaniesCurrentPage(getState());
      const data = await ApiCompanies.loadCompaniesByQuery({
        query,
        page: currentPage + 1,
      });

      dispatch(updateCompanies(data.results));
      dispatch(setTotalPages(data.total_pages));
    } catch (e) {
      dispatch(hideLoadingMore());
      console.log(e);
    }
  };
};
