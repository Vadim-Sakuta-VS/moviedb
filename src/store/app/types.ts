export enum AppActions {
  SET_TYPE_LOADING = 'APP/SET_TYPE_LOADING',
  SET_APP_ERROR = 'APP/SET_APP_ERROR',
}

export type SetTypeLoadingAction = {
  type: typeof AppActions.SET_TYPE_LOADING;
  payload: boolean;
};

export type SetAppErrorAction = {
  type: AppActions.SET_APP_ERROR;
  payload: boolean;
};

export type AppAction = SetTypeLoadingAction | SetAppErrorAction;

export type AppState = {
  isLoading: boolean;
  hasError: boolean;
};
