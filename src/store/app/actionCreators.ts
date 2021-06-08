import { AppActions, SetAppErrorAction } from './types';

export const setAppError = (hasError: boolean): SetAppErrorAction => ({
  type: AppActions.SET_APP_ERROR,
  payload: hasError,
});
