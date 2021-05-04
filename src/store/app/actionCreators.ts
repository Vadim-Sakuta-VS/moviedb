import { AppAction, SET_TYPE_LOADING } from './types';

export const setTypeLoading = (isLoading: boolean): AppAction => ({
  type: SET_TYPE_LOADING,
  payload: isLoading,
});
