import { Dispatch } from 'redux';
import { CustomListsAction } from './types';
import { ApiAccount } from '../../api/apiAccount';
import { GetRootState } from '../rootStore';
import { selectUserDataDetails } from '../userAuth/selectors';
import { setListsData } from './actionCreators';

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
