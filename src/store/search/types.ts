import { ICompany, IMovie } from '../../types/entities';
import { SearchType } from './reducers';

export enum SearchActions {
  SET_QUERY = 'SEARCH/SET_QUERY',
  SET_DATA_BY_TYPE = 'SEARCH/SET_DATA_BY_TYPE',
  UPDATE_DATA_BY_TYPE = 'SEARCH/UPDATE_DATA_BY_TYPE',
  SET_TYPE_LOADING = 'SEARCH/SET_TYPE_LOADING',
  SET_TYPE_LOADING_MORE = 'SEARCH/SET_TYPE_LOADING_MORE',
  SET_TOTAL_PAGES = 'SEARCH/SET_TOTAL_PAGES',
  CHANGE_PAGE = 'SEARCH/CHANGE_PAGE',
}

export interface SetQueryAction {
  type: SearchActions.SET_QUERY;
  payload: string;
}

export interface SetDataByTypeAction {
  type: SearchActions.SET_DATA_BY_TYPE;
  payload: {
    type: SearchType;
    data: IMovie[] | ICompany[];
  };
}

export interface UpdateDataByTypeAction {
  type: SearchActions.UPDATE_DATA_BY_TYPE;
  payload: {
    type: SearchType;
    data: IMovie[] | ICompany[];
  };
}

export interface SetTypeLoadingAction {
  type: SearchActions.SET_TYPE_LOADING;
  payload: boolean;
}

export interface SetTypeLoadingMoreAction {
  type: SearchActions.SET_TYPE_LOADING_MORE;
  payload: boolean;
}

export interface SetTotalPagesAction {
  type: SearchActions.SET_TOTAL_PAGES;
  payload: number;
}

export interface ChangePageAction {
  type: SearchActions.CHANGE_PAGE;
  payload: number;
}

export type SearchAction =
  | SetQueryAction
  | SetDataByTypeAction
  | UpdateDataByTypeAction
  | SetTypeLoadingAction
  | SetTypeLoadingMoreAction
  | SetTotalPagesAction
  | ChangePageAction;

export interface SearchState {
  query: string;
  data: {
    movies: IMovie[];
    companies: ICompany[];
  };
  currentPage: number;
  totalPages: number | null;
  isLoading: boolean;
  isLoadingMore: boolean;
}
