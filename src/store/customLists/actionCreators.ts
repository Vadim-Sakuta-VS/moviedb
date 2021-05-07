import {
  AddListAction,
  ChangePageAction,
  CustomListsActions,
  DeleteListAction,
  FetchState,
  SetFetchStateAction,
  SetListsDataAction,
  SetTotalPagesAction,
} from './types';
import { ICustomList } from '../../types/entities';
import { CustomListsActionValuesType } from './reducers';

export const setListsData = (lists: ICustomList[]): SetListsDataAction => ({
  type: CustomListsActions.SET_LISTS_DATA,
  payload: lists,
});

export const setTotalPages = (totalPages: number): SetTotalPagesAction => ({
  type: CustomListsActions.SET_TOTAL_PAGES,
  payload: totalPages,
});

export const setFetchState = (
  type: CustomListsActionValuesType,
  fetchState: FetchState
): SetFetchStateAction => ({
  type: CustomListsActions.SET_FETCH_STATE,
  payload: { type, fetchState },
});

export const changePage = (page: number): ChangePageAction => ({
  type: CustomListsActions.CHANGE_PAGE,
  payload: page,
});

export const addList = (list: ICustomList): AddListAction => ({
  type: CustomListsActions.ADD_LIST,
  payload: list,
});

export const deleteList = (id: number): DeleteListAction => ({
  type: CustomListsActions.DELETE_LIST,
  payload: id,
});
