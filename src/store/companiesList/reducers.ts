import {
  CompaniesListAction,
  CompaniesListActions,
  CompaniesListState,
} from './types';
import { ICompany } from '../../types/entities';

const initialState: CompaniesListState = {
  query: '',
  data: [],
  currentPage: 1,
  totalPages: null,
  isLoading: false,
  isLoadingMore: false,
};

function companiesListReducer(
  state = initialState,
  action: CompaniesListAction
): CompaniesListState {
  switch (action.type) {
    case CompaniesListActions.SET_QUERY:
      return { ...state, query: action.payload };
    case CompaniesListActions.SET_TYPE_LOADING:
      return { ...state, isLoading: action.payload };
    case CompaniesListActions.SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case CompaniesListActions.SET_COMPANIES:
      return {
        ...state,
        data: action.payload,
        currentPage: 1,
        isLoading: false,
      };
    case CompaniesListActions.SET_TYPE_LOADING_MORE:
      return { ...state, isLoadingMore: action.payload };
    case CompaniesListActions.UPDATE_COMPANIES:
      return {
        ...state,
        data: [...(state.data as ICompany[]), ...action.payload],
        currentPage: state.currentPage + 1,
        isLoadingMore: false,
      };
    default:
      return state;
  }
}

export { companiesListReducer };
