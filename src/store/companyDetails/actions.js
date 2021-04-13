export const SET_COMPANY_DETAILS = 'SET_COMPANY_DETAILS';
export const SHOW_LOADING = 'COMPANY_DETAILS/SHOW_LOADING';
export const HIDE_LOADING = 'COMPANY_DETAILS/HIDE_LOADING';

export const setCompanyDetails = (company) => ({
  type: SET_COMPANY_DETAILS,
  payload: company,
});

export const showLoading = () => ({
  type: SHOW_LOADING,
});

export const hideLoading = () => ({
  type: HIDE_LOADING,
});
