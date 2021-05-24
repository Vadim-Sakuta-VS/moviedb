import { Dispatch } from 'redux';
import { CustomListsAction } from './types';
import { ApiAccount } from '../../api/apiAccount';
import { GetRootState } from '../rootStore';
import { selectUserDataDetails } from '../userAuth/selectors';
import { deleteList, setFetchState, setListsData } from './actionCreators';
import { CUSTOM_LISTS_ACTIONS_TYPES } from './reducers';
import { SetAppErrorAction } from '../app/types';
import { setAppError } from '../app/actionCreators';

export const loadCustomLists = () => {
  return async (
    dispatch: Dispatch<CustomListsAction | SetAppErrorAction>,
    getState: GetRootState
  ) => {
    try {
      const accountId = selectUserDataDetails(getState()).id;
      const res = await ApiAccount.loadCustomLists(accountId, 1);
      dispatch(setListsData(res.results));
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    }
  };
};

export const deleteCustomList = (list_id: number) => {
  return async (dispatch: Dispatch<CustomListsAction | SetAppErrorAction>) => {
    try {
      dispatch(
        setFetchState(CUSTOM_LISTS_ACTIONS_TYPES.deleting, {
          isLoading: true,
          list_id,
        })
      );
      await ApiAccount.manipulateCustomList(
        ApiAccount.DELETE.deleteCustomList(list_id),
        ApiAccount.ManipulationCustomListTypes.DELETE
      );
      dispatch(deleteList(list_id));
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    } finally {
      dispatch(
        setFetchState(CUSTOM_LISTS_ACTIONS_TYPES.deleting, { isLoading: false })
      );
    }
  };
};
