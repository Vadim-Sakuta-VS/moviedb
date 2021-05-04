import { RootState } from '../rootStore';
import { IUser } from '../../types/entities';

export const selectUserAuthStatus = (state: RootState): boolean =>
  state.userAuth.success;
export const selectAuthLoading = (state: RootState): boolean =>
  state.userAuth.isLoading;
export const selectStatusMessage = (state: RootState): string =>
  state.userAuth.status_message;
export const selectUserDataDetails = (state: RootState): IUser =>
  state.userAuth.user;
