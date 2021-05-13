import {
  CustomListsAction,
  CustomListsActions,
  CustomListsStateType,
  FetchState,
} from './types';

const initialFetchState: FetchState = {
  isLoading: false,
  error_message: '',
};

const initialState: CustomListsStateType = {
  lists: [],
  adding: { ...initialFetchState },
  deleting: { ...initialFetchState, list_id: 0 },
};

export const CUSTOM_LISTS_ACTIONS_TYPES = {
  adding: 'adding',
  deleting: 'deleting',
} as const;

export type CustomListsActionValuesType = typeof CUSTOM_LISTS_ACTIONS_TYPES[keyof typeof CUSTOM_LISTS_ACTIONS_TYPES];

function customListsReducer(
  state = initialState,
  action: CustomListsAction
): CustomListsStateType {
  switch (action.type) {
    case CustomListsActions.SET_FETCH_STATE:
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          ...action.payload.fetchState,
        },
      };
    case CustomListsActions.SET_LISTS_DATA:
      return { ...state, lists: action.payload };
    case CustomListsActions.ADD_LIST:
      return {
        ...state,
        lists: [action.payload, ...state.lists],
        adding: { ...initialFetchState },
      };
    case CustomListsActions.DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter((l) => l.id !== action.payload),
      };
    case CustomListsActions.UPDATE_LIST_ITEM_COUNT:
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === action.payload.list_id) {
            return { ...list, item_count: action.payload.item_count };
          }
          return list;
        }),
      };
    default:
      return state;
  }
}

export { customListsReducer };
