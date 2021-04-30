export const SET_TYPE_LOADING = 'APP/SET_TYPE_LOADING';

export type AppAction = {
  type: typeof SET_TYPE_LOADING;
  payload: boolean;
};

export type AppState = {
  isLoading: boolean;
};
