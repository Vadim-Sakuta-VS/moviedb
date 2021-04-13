import { hideLoading, setCompanyDetails, showLoading } from './actions';
import { ApiCompanies } from '../../api/apiCompanies';

export const loadCompanyDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const data = await ApiCompanies.loadCompanyDetails(id);
      if (!data.id) {
        window.location.replace('/page404');
      }

      dispatch(setCompanyDetails(data));
    } catch (e) {
      dispatch(hideLoading());
      console.log(e);
    }
  };
};
