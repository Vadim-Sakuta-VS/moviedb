import { RootState } from '../rootStore';

export const selectQuery = (state: RootState): string => state.search.query;
export const selectSearchCurrentPage = (state: RootState): number =>
  state.search.currentPage;
export const selectSearchTotalPages = (state: RootState): number | null =>
  state.search.totalPages;
export const selectSearchData = (state: RootState) => state.search.data;
export const selectSearchLoading = (state: RootState): boolean =>
  state.search.isLoading;
export const selectSearchLoadingMore = (state: RootState): boolean =>
  state.search.isLoadingMore;
