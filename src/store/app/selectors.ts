import { RootState } from '../rootStore';

export const selectAppLoading = (state: RootState): boolean =>
  state.app.isLoading;
export const selectAppError = (state: RootState) => state.app.hasError;
