import { Dispatch } from 'redux';
import { CustomListsAction } from './types';
import { ApiAccount } from '../../api/apiAccount';
import { GetRootState } from '../rootStore';
import { selectUserDataDetails } from '../userAuth/selectors';
import { deleteList, setFetchState, setListsData } from './actionCreators';
import { CUSTOM_LISTS_ACTIONS_TYPES } from './reducers';

export const loadCustomLists = () => {
  return async (
    dispatch: Dispatch<CustomListsAction>,
    getState: GetRootState
  ) => {
    try {
      const accountId = selectUserDataDetails(getState()).id;
      const res = await ApiAccount.loadCustomLists(accountId, 1);
      dispatch(setListsData(res.results));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteCustomList = (list_id: number) => {
  return async (dispatch: Dispatch<CustomListsAction>) => {
    try {
      dispatch(
        setFetchState(CUSTOM_LISTS_ACTIONS_TYPES.deleting, {
          isLoading: true,
          list_id,
        })
      );
      // const res = await ApiAccount.manipulateCustomList(
      //   ApiAccount.ManipulationCustomListTypes.DELETE_LIST,
      //   list_id
      // );
      // if (res.success) {
      //   dispatch(deleteList(list_id));
      // }
      await ApiAccount.manipulateCustomList(
        ApiAccount.ManipulationCustomListTypes.DELETE_LIST,
        list_id
      );
      dispatch(deleteList(list_id));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(
        setFetchState(CUSTOM_LISTS_ACTIONS_TYPES.deleting, { isLoading: false })
      );
    }
  };
};
