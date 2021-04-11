import {
  HIDE_LOADING,
  HIDE_LOADING_MORE,
  SET_COMPANIES,
  SET_QUERY,
  SET_TOTAL_PAGES,
  SHOW_LOADING,
  SHOW_LOADING_MORE,
  UPDATE_COMPANIES,
} from './actions';

const initialState = {
  query: '',
  data: [],
  currentPage: 1,
  totalPages: null,
  isLoading: false,
  isLoadingMore: false,
};

function companiesListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.payload };
    case SHOW_LOADING:
      return { ...state, isLoading: true };
    case HIDE_LOADING:
      return { ...state, isLoading: false };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case SET_COMPANIES:
      return {
        ...state,
        data: action.payload,
        currentPage: 1,
        isLoading: false,
      };
    case SHOW_LOADING_MORE:
      return { ...state, isLoadingMore: true };
    case HIDE_LOADING_MORE:
      return { ...state, isLoadingMore: false };
    case UPDATE_COMPANIES:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        currentPage: state.currentPage + 1,
        isLoadingMore: false,
      };
    default:
      return state;
  }
}

export { companiesListReducer };
