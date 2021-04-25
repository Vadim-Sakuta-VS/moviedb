import { RootState } from '../rootStore';
import { ICompany } from '../../types/types';

export const selectQuery = (state: RootState): string =>
  state.companiesList.query;
export const selectCompaniesCurrentPage = (state: RootState): number =>
  state.companiesList.currentPage;
export const selectCompaniesTotalPages = (state: RootState): number | null =>
  state.companiesList.totalPages;
export const selectCompaniesList = (state: RootState): ICompany[] | string =>
  state.companiesList.data;
export const selectCompaniesLoading = (state: RootState): boolean =>
  state.companiesList.isLoading;
export const selectCompaniesLoadingMore = (state: RootState): boolean =>
  state.companiesList.isLoadingMore;
