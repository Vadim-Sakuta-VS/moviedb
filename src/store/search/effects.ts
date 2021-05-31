import {
  changePage,
  setDataByType,
  setTotalPages,
  setTypeLoading,
  setTypeLoadingMore,
  updateDataByType,
} from './actionCreators';
import { selectSearchCurrentPage } from './selectors';
import { Dispatch } from 'redux';
import { SearchAction } from './types';
import { GetRootState } from '../rootStore';
import { SearchType } from './reducers';
import { ApiSearch } from '../../api/ApiSearch';
import { ParamGetObj } from '../../types/params';
import { SetAppErrorAction } from '../app/types';
import { setAppError } from '../app/actionCreators';

export const searchDataByQuery = (params: ParamGetObj) => {
  return async (dispatch: Dispatch<SearchAction | SetAppErrorAction>) => {
    try {
      dispatch(setTypeLoading(true));

      const search_type = params.search_type as SearchType;
      const data = await ApiSearch.searchDataByQuery(
        ApiSearch.GET[search_type],
        params
      );

      dispatch(setDataByType(search_type, data.results || []));
      dispatch(setTotalPages(data.total_pages));
      dispatch(changePage(data.page));
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    } finally {
      dispatch(setTypeLoading(false));
    }
  };
};

export const loadMoreDataByQuery = (params: ParamGetObj) => {
  return async (
    dispatch: Dispatch<SearchAction | SetAppErrorAction>,
    getState: GetRootState
  ) => {
    try {
      dispatch(setTypeLoadingMore(true));

      const search_type = params.search_type as SearchType;
      const currentPage = selectSearchCurrentPage(getState());
      const data = await ApiSearch.searchDataByQuery(
        ApiSearch.GET[search_type],
        {
          ...params,
          page: String(currentPage + 1),
        }
      );

      dispatch(updateDataByType(search_type, data.results || []));
      dispatch(changePage(currentPage + 1));
      dispatch(setTotalPages(data.total_pages));
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    } finally {
      dispatch(setTypeLoadingMore(false));
    }
  };
};
