import { UserAuthResponse } from '../../types/params';
import {
  LoginUserAction,
  LogoutUserAction,
  SetTypeLoadingAction,
  SetUserDataAction,
  UserAuthActions,
} from './types';
import { IUser } from '../../types/entities';

export const loginUserCreator = (data: UserAuthResponse): LoginUserAction => ({
  type: UserAuthActions.LOGIN_USER,
  payload: data,
});

export const logoutUserCreator = (): LogoutUserAction => ({
  type: UserAuthActions.LOGOUT_USER,
});

export const setTypeLoading = (isLoading: boolean): SetTypeLoadingAction => ({
  type: UserAuthActions.SET_TYPE_LOADING,
  payload: isLoading,
});

export const setUserData = (user: IUser): SetUserDataAction => ({
  type: UserAuthActions.SET_USER_DATA,
  payload: user,
});
