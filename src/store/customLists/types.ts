import { ICustomList } from '../../types/entities';
import { CustomListsActionValuesType } from './reducers';

export enum CustomListsActions {
  SET_LISTS_DATA = 'CUSTOM_LISTS/SET_LISTS_DATA',
  SET_TOTAL_PAGES = 'CUSTOM_LISTS/SET_TOTAL_PAGES',
  SET_FETCH_STATE = 'CUSTOM_LISTS/SET_FETCH_STATE',
  CHANGE_PAGE = 'CUSTOM_LISTS/CHANGE_PAGE',
  ADD_LIST = 'CUSTOM_LISTS/ADD_LIST',
  DELETE_LIST = 'CUSTOM_LISTS/DELETE_LIST',
  UPDATE_LIST_ITEM_COUNT = 'CUSTOM_LISTS/UPDATE_LIST_ITEM_COUNT',
}

export type SetListsDataAction = {
  type: CustomListsActions.SET_LISTS_DATA;
  payload: ICustomList[];
};

export type SetTotalPagesAction = {
  type: CustomListsActions.SET_TOTAL_PAGES;
  payload: number;
};

export type SetFetchStateAction = {
  type: CustomListsActions.SET_FETCH_STATE;
  payload: {
    type: CustomListsActionValuesType;
    fetchState: FetchState;
  };
};

export type ChangePageAction = {
  type: CustomListsActions.CHANGE_PAGE;
  payload: number;
};

export type AddListAction = {
  type: CustomListsActions.ADD_LIST;
  payload: ICustomList;
};

export type DeleteListAction = {
  type: CustomListsActions.DELETE_LIST;
  payload: number;
};

export type UpdateListItemCountAction = {
  type: CustomListsActions.UPDATE_LIST_ITEM_COUNT;
  payload: { list_id: number; item_count: number };
};

export type CustomListsAction =
  | SetListsDataAction
  | SetTotalPagesAction
  | SetFetchStateAction
  | ChangePageAction
  | AddListAction
  | DeleteListAction
  | UpdateListItemCountAction;

export type FetchState = {
  isLoading?: boolean;
  error_message?: string;
};

export type CustomListsStateType = {
  lists: ICustomList[];
  adding: FetchState;
  deleting: FetchState & { list_id: number };
};
