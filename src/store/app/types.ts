export enum AppActions {
  SET_APP_ERROR = 'APP/SET_APP_ERROR',
}

export type SetAppErrorAction = {
  type: AppActions.SET_APP_ERROR;
  payload: boolean;
};

export type AppAction = SetAppErrorAction;

export type AppState = {
  hasError: boolean;
};
