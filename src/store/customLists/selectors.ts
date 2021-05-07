import { RootState } from '../rootStore';
import { CustomListsActionValuesType } from './reducers';

export const selectCustomListsFetchStateByType = (
  type: CustomListsActionValuesType
) => (state: RootState) => state.customLists[type];
