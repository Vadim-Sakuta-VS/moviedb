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
  currentPage: 0,
  totalPages: 0,
  adding: { ...initialFetchState },
  deleting: { ...initialFetchState },
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
    case CustomListsActions.ADD_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload],
        adding: { ...initialFetchState },
      };
    default:
      return state;
  }
}

export { customListsReducer };
