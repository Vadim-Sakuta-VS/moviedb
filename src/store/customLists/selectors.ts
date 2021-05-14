import { RootState } from '../rootStore';
import { CustomListsActionValuesType } from './reducers';
import { FetchState } from './types';

export const selectCustomListsFetchStateByType = (
  type: CustomListsActionValuesType
) => (state: RootState): FetchState & { list_id?: number } =>
  state.customLists[type];
export const selectCustomLists = (state: RootState) => state.customLists.lists;
export const selectCustomListsItemCount = (list_id: number) => (
  state: RootState
) => state.customLists.lists.find((list) => list.id === list_id)?.item_count;
