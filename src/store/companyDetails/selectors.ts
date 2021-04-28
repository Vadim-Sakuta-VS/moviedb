import { RootState } from '../rootStore';
import { ICompany } from '../../types/entities';

export const selectCompanyDetails = (state: RootState): ICompany =>
  state.companyDetails.company;
export const selectCompanyDetailsLoading = (state: RootState): boolean =>
  state.companyDetails.isLoading;
