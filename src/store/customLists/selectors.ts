import { RootState } from '../rootStore';
import { CustomListsActionValuesType } from './reducers';
import { FetchState } from './types';

export const selectCustomListsFetchStateByType = (
  type: CustomListsActionValuesType
) => (state: RootState): FetchState & { list_id?: number } =>
  state.customLists[type];
export const selectCurrentPage = (state: RootState) =>
  state.customLists.currentPage;
export const selectTotalPages = (state: RootState) =>
  state.customLists.totalPages;
export const selectCustomLists = (state: RootState) => state.customLists.lists;
