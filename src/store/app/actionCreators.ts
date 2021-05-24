import { AppAction, AppActions, SetAppErrorAction } from './types';

export const setTypeLoading = (isLoading: boolean): AppAction => ({
  type: AppActions.SET_TYPE_LOADING,
  payload: isLoading,
});

export const setAppError = (hasError: boolean): SetAppErrorAction => ({
  type: AppActions.SET_APP_ERROR,
  payload: hasError,
});
