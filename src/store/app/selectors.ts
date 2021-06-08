import { RootState } from '../rootStore';

export const selectAppError = (state: RootState) => state.app.hasError;
