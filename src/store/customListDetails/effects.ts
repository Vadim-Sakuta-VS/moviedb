import { Dispatch } from 'redux';
import {
  CustomListDetailsAction,
  CustomListDetailsTypesLoading,
} from './types';
import {
  deleteMovieCustomList,
  setCustomListDetailsData,
  setCustomListDetailsLoading,
  setManipulationMovieId,
} from './actionCreators';
import { ApiAccount } from '../../api/apiAccount';
import { ICustomListDetails } from '../../types/entities';
import { UpdateListItemCountAction } from '../customLists/types';
import { selectCustomListsItemCount } from '../customLists/selectors';
import { GetRootState } from '../rootStore';
import { updateListItemCount } from '../customLists/actionCreators';

export const loadCustomListDetailsData = (list_id: number) => {
  return async (dispatch: Dispatch<CustomListDetailsAction>) => {
    try {
      dispatch(
        setCustomListDetailsLoading(
          CustomListDetailsTypesLoading.isDetailsLoading,
          true
        )
      );

      const res = ((await ApiAccount.manipulateCustomList(
        ApiAccount.GET.getDetailsCustomList(list_id),
        ApiAccount.ManipulationCustomListTypes.GET
      )) as unknown) as ICustomListDetails;

      if (res.id) {
        dispatch(setCustomListDetailsData(res));
      }
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(
        setCustomListDetailsLoading(
          CustomListDetailsTypesLoading.isDetailsLoading,
          false
        )
      );
    }
  };
};

export const deleteMovieCustomListEffect = (
  list_id: number,
  movie_id: number
) => {
  return async (
    dispatch: Dispatch<CustomListDetailsAction | UpdateListItemCountAction>,
    getState: GetRootState
  ) => {
    try {
      dispatch(setManipulationMovieId(movie_id));
      dispatch(
        setCustomListDetailsLoading(
          CustomListDetailsTypesLoading.isRemoveMovieLoading,
          true
        )
      );

      const res = await ApiAccount.manipulateCustomList(
        ApiAccount.POST.removeMovieCustomList(list_id),
        ApiAccount.ManipulationCustomListTypes.POST,
        { media_id: movie_id }
      );

      if (res.success) {
        const itemCount = selectCustomListsItemCount(list_id)(getState());
        itemCount && dispatch(updateListItemCount(list_id, itemCount - 1));
        dispatch(deleteMovieCustomList(movie_id));
      }
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(
        setCustomListDetailsLoading(
          CustomListDetailsTypesLoading.isRemoveMovieLoading,
          false
        )
      );
    }
  };
};
