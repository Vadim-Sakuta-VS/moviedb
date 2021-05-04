import { Dispatch } from 'redux';
import { UserAuthAction } from './types';
import {
  loginUserCreator,
  logoutUserCreator,
  setTypeLoading,
  setUserData,
} from './actionCreators';
import { setTypeLoading as setTypeAppLoading } from '../app/actionCreators';
import { ApiAuth } from '../../api/apiAuth';
import { IUserParam } from '../../types/params';
import { AppAction } from '../app/types';

export const loginUser = (user: IUserParam) => {
  return async (dispatch: Dispatch<UserAuthAction>) => {
    try {
      dispatch(setTypeLoading(true));
      const userAuthData = await ApiAuth.loginUser(user);
      if (userAuthData) {
        const userDetails = await ApiAuth.getAccountDetails();
        userDetails && dispatch(setUserData(userDetails));
      }
      dispatch(loginUserCreator(userAuthData));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setTypeLoading(false));
    }
  };
};

export const logoutUser = () => {
  return async (dispatch: Dispatch<UserAuthAction>) => {
    try {
      await ApiAuth.logoutUser();
      dispatch(logoutUserCreator());
    } catch (e) {
      console.log(e);
    }
  };
};

export const loadUserDataDetails = () => {
  return async (dispatch: Dispatch<UserAuthAction | AppAction>) => {
    try {
      dispatch(setTypeLoading(true));
      const userDetails = await ApiAuth.getAccountDetails();
      if (userDetails) {
        dispatch(setUserData(userDetails));
      }
      dispatch(setTypeAppLoading(false));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setTypeLoading(false));
    }
  };
};
