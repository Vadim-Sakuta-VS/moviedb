import { RootState } from '../rootStore';

export const selectAppLoading = (state: RootState): boolean =>
  state.app.isLoading;
