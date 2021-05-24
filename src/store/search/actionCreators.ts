import {
  ChangePageAction,
  SearchActions,
  SetDataByTypeAction,
  SetQueryAction,
  SetTotalPagesAction,
  SetTypeLoadingAction,
  SetTypeLoadingMoreAction,
  UpdateDataByTypeAction,
} from './types';
import { ICompany, IMovie } from '../../types/entities';
import { SearchType } from './reducers';

export const setQuery = (query: string): SetQueryAction => ({
  type: SearchActions.SET_QUERY,
  payload: query,
});

export const setDataByType = (
  type: SearchType,
  data: IMovie[] | ICompany[]
): SetDataByTypeAction => ({
  type: SearchActions.SET_DATA_BY_TYPE,
  payload: { type, data },
});

export const updateDataByType = (
  type: SearchType,
  data: IMovie[] | ICompany[]
): UpdateDataByTypeAction => ({
  type: SearchActions.UPDATE_DATA_BY_TYPE,
  payload: { type, data },
});

export const setTypeLoading = (isLoading: boolean): SetTypeLoadingAction => ({
  type: SearchActions.SET_TYPE_LOADING,
  payload: isLoading,
});

export const setTypeLoadingMore = (
  isLoading: boolean
): SetTypeLoadingMoreAction => ({
  type: SearchActions.SET_TYPE_LOADING_MORE,
  payload: isLoading,
});

export const setTotalPages = (totalPages: number): SetTotalPagesAction => ({
  type: SearchActions.SET_TOTAL_PAGES,
  payload: totalPages,
});

export const changePage = (page: number): ChangePageAction => ({
  type: SearchActions.CHANGE_PAGE,
  payload: page,
});
