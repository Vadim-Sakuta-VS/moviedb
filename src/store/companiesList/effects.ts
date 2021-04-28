import {
  setCompanies,
  setTotalPages,
  setTypeLoading,
  setTypeLoadingMore,
  updateCompanies,
} from './actionCreators';
import { ApiCompanies } from '../../api/apiCompanies';
import { selectCompaniesCurrentPage, selectQuery } from './selectors';
import { Dispatch } from 'redux';
import { CompaniesListAction } from './types';
import { GetRootState } from '../rootStore';

export const searchCompaniesByQuery = () => {
  return async (
    dispatch: Dispatch<CompaniesListAction>,
    getState: GetRootState
  ) => {
    try {
      dispatch(setTypeLoading(true));

      const query = selectQuery(getState());
      const data = await ApiCompanies.loadCompaniesByQuery({
        query,
        page: '1',
      });

      const result = data.results.length ? data.results : 'Nothing found';

      dispatch(setCompanies(result));
      dispatch(setTotalPages(data.total_pages));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setTypeLoading(false));
    }
  };
};

export const loadMoreCompaniesByQuery = () => {
  return async (
    dispatch: Dispatch<CompaniesListAction>,
    getState: GetRootState
  ) => {
    try {
      dispatch(setTypeLoadingMore(true));

      const query = selectQuery(getState());
      const currentPage = selectCompaniesCurrentPage(getState());
      const data = await ApiCompanies.loadCompaniesByQuery({
        query,
        page: String(currentPage + 1),
      });

      dispatch(updateCompanies(data.results));
      dispatch(setTotalPages(data.total_pages));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setTypeLoadingMore(false));
    }
  };
};
