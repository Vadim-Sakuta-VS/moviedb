import { SearchAction, SearchActions, SearchState } from './types';

export const SearchTypes = {
  movies: 'movies',
  companies: 'companies',
} as const;

export type SearchType = keyof typeof SearchTypes;

const initialState: SearchState = {
  query: '',
  data: {
    movies: [],
    companies: [],
  },
  currentPage: 1,
  totalPages: null,
  isLoading: false,
  isLoadingMore: false,
};

function searchReducer(
  state = initialState,
  action: SearchAction
): SearchState {
  switch (action.type) {
    case SearchActions.SET_QUERY:
      return { ...state, query: action.payload };
    case SearchActions.SET_TYPE_LOADING:
      return { ...state, isLoading: action.payload };
    case SearchActions.SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case SearchActions.SET_DATA_BY_TYPE:
      return {
        ...state,
        data: { ...state.data, [action.payload.type]: action.payload.data },
      };
    case SearchActions.SET_TYPE_LOADING_MORE:
      return { ...state, isLoadingMore: action.payload };
    case SearchActions.UPDATE_DATA_BY_TYPE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.type]: [
            ...state.data[action.payload.type],
            ...action.payload.data,
          ],
        },
      };
    case SearchActions.CHANGE_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}

export { searchReducer };
