import {
  CompaniesListActions,
  SetCompaniesAction,
  SetQueryAction,
  SetTotalPagesAction,
  SetTypeLoadingAction,
  SetTypeLoadingMoreAction,
  UpdateCompaniesAction,
} from './types';
import { ICompany } from '../../types/entities';

export const setQuery = (query: string): SetQueryAction => ({
  type: CompaniesListActions.SET_QUERY,
  payload: query,
});

export const setCompanies = (
  companies: ICompany[] | string
): SetCompaniesAction => ({
  type: CompaniesListActions.SET_COMPANIES,
  payload: companies,
});

export const updateCompanies = (
  companies: ICompany[]
): UpdateCompaniesAction => ({
  type: CompaniesListActions.UPDATE_COMPANIES,
  payload: companies,
});

export const setTypeLoading = (isLoading: boolean): SetTypeLoadingAction => ({
  type: CompaniesListActions.SET_TYPE_LOADING,
  payload: isLoading,
});

export const setTypeLoadingMore = (
  isLoading: boolean
): SetTypeLoadingMoreAction => ({
  type: CompaniesListActions.SET_TYPE_LOADING_MORE,
  payload: isLoading,
});

export const setTotalPages = (totalPages: number): SetTotalPagesAction => ({
  type: CompaniesListActions.SET_TOTAL_PAGES,
  payload: totalPages,
});
