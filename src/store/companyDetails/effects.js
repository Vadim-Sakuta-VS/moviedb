import { hideLoading, setCompanyDetails, showLoading } from './actions';
import { ApiMovies } from '../../api/apiMovies';

export const loadCompanyDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const data = await ApiMovies.loadCompanyDetails(id);
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
