import { UserAuthResponse } from '../../types/params';
import { IUser } from '../../types/entities';

export enum UserAuthActions {
  LOGIN_USER = 'LOGIN_USER',
  LOGOUT_USER = 'LOGOUT_USER',
  SET_TYPE_LOADING = 'SET_TYPE_LOADING',
  SET_USER_DATA = 'SET_USER_DATA',
}

export interface UserAuthState extends UserAuthResponse {
  isLoading: boolean;
  user: IUser;
}

export type LoginUserAction = {
  type: UserAuthActions.LOGIN_USER;
  payload: UserAuthResponse;
};

export type LogoutUserAction = {
  type: UserAuthActions.LOGOUT_USER;
};

export type SetTypeLoadingAction = {
  type: UserAuthActions.SET_TYPE_LOADING;
  payload: boolean;
};

export type SetUserDataAction = {
  type: UserAuthActions.SET_USER_DATA;
  payload: IUser;
};

export type UserAuthAction =
  | LoginUserAction
  | LogoutUserAction
  | SetTypeLoadingAction
  | SetUserDataAction;
