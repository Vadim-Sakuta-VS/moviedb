import { HIDE_LOADING, SET_COMPANY_DETAILS, SHOW_LOADING } from './actions';

const initialState = {
  isLoading: false,
  company: {},
};

function companyDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMPANY_DETAILS:
      return { ...state, company: action.payload, isLoading: false };
    case SHOW_LOADING:
      return { ...state, isLoading: true };
    case HIDE_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export { companyDetailsReducer };
