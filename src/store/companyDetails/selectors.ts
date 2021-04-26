import { RootState } from '../rootStore';
import { ICompany } from '../../types/types';

export const selectCompanyDetails = (state: RootState): ICompany =>
  state.companyDetails.company;
export const selectCompanyDetailsLoading = (state: RootState): boolean =>
  state.companyDetails.isLoading;
