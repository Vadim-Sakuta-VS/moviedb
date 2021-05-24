import { setCompanyDetails, setTypeLoading } from './actionCreators';
import { ApiCompanies } from '../../api/apiCompanies';
import { Dispatch } from 'redux';
import { CompanyDetailsAction } from './types';
import { SetAppErrorAction } from '../app/types';
import { setAppError } from '../app/actionCreators';

export const loadCompanyDetails = (id: number) => {
  return async (
    dispatch: Dispatch<CompanyDetailsAction | SetAppErrorAction>
  ) => {
    try {
      dispatch(setTypeLoading(true));

      const data = await ApiCompanies.loadCompanyDetails(id);
      if (!data.id) {
        window.location.replace('/page404');
      }

      dispatch(setCompanyDetails(data));
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    } finally {
      dispatch(setTypeLoading(false));
    }
  };
};
