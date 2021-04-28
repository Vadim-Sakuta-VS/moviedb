import { ICompany } from '../../types/entities';
import {
  CompanyDetailsActions,
  SetCompanyDetailsAction,
  SetTypeLoadingAction,
} from './types';

export const setCompanyDetails = (
  company: ICompany
): SetCompanyDetailsAction => ({
  type: CompanyDetailsActions.SET_COMPANY_DETAILS,
  payload: company,
});

export const setTypeLoading = (isLoading: boolean): SetTypeLoadingAction => ({
  type: CompanyDetailsActions.SET_TYPE_LOADING,
  payload: isLoading,
});
