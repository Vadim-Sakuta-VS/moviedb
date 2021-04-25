import {
  CompanyDetailsAction,
  CompanyDetailsActions,
  CompanyDetailsState,
} from './types';

const initialState: CompanyDetailsState = {
  isLoading: false,
  company: {},
};

function companyDetailsReducer(
  state = initialState,
  action: CompanyDetailsAction
): CompanyDetailsState {
  switch (action.type) {
    case CompanyDetailsActions.SET_COMPANY_DETAILS:
      return { ...state, company: action.payload, isLoading: false };
    case CompanyDetailsActions.SET_TYPE_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export { companyDetailsReducer };
