import { ICompany } from '../../types/entities';

export enum CompaniesListActions {
  SET_QUERY = 'SET_QUERY',
  SET_COMPANIES = 'SET_COMPANIES',
  UPDATE_COMPANIES = 'UPDATE_COMPANIES',
  SET_TYPE_LOADING = 'COMPANIES/SET_TYPE_LOADING',
  SET_TYPE_LOADING_MORE = 'COMPANIES/SET_TYPE_LOADING_MORE',
  SET_TOTAL_PAGES = 'COMPANIES/SET_TOTAL_PAGES',
}

export interface SetQueryAction {
  type: CompaniesListActions.SET_QUERY;
  payload: string;
}

export interface SetCompaniesAction {
  type: CompaniesListActions.SET_COMPANIES;
  payload: ICompany[] | string;
}

export interface UpdateCompaniesAction {
  type: CompaniesListActions.UPDATE_COMPANIES;
  payload: ICompany[];
}

export interface SetTypeLoadingAction {
  type: CompaniesListActions.SET_TYPE_LOADING;
  payload: boolean;
}

export interface SetTypeLoadingMoreAction {
  type: CompaniesListActions.SET_TYPE_LOADING_MORE;
  payload: boolean;
}

export interface SetTotalPagesAction {
  type: CompaniesListActions.SET_TOTAL_PAGES;
  payload: number;
}

export type CompaniesListAction =
  | SetQueryAction
  | SetCompaniesAction
  | UpdateCompaniesAction
  | SetTypeLoadingAction
  | SetTypeLoadingMoreAction
  | SetTotalPagesAction;

export interface CompaniesListState {
  query: string;
  data: ICompany[] | string;
  currentPage: number;
  totalPages: number | null;
  isLoading: boolean;
  isLoadingMore: boolean;
}
