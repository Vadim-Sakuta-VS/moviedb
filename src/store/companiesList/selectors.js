export const selectQuery = (state) => state.companiesList.query;
export const selectCompaniesCurrentPage = (state) =>
  state.companiesList.currentPage;
export const selectCompaniesTotalPages = (state) =>
  state.companiesList.totalPages;
export const selectCompaniesList = (state) => state.companiesList.data;
export const selectCompaniesLoading = (state) => state.companiesList.isLoading;
export const selectCompaniesLoadingMore = (state) =>
  state.companiesList.isLoadingMore;
