import { setCompanyDetails, setTypeLoading } from './actionCreators';
import { ApiCompanies } from '../../api/apiCompanies';
import { Dispatch } from 'redux';
import { CompanyDetailsAction } from './types';

export const loadCompanyDetails = (id: number) => {
  return async (dispatch: Dispatch<CompanyDetailsAction>) => {
    try {
      dispatch(setTypeLoading(true));

      const data = await ApiCompanies.loadCompanyDetails(id);
      if (!data.id) {
        window.location.replace('/page404');
      }

      dispatch(setCompanyDetails(data));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setTypeLoading(false));
    }
  };
};
