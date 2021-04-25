import { ICompany } from '../../types/types';

export enum CompanyDetailsActions {
  SET_TYPE_LOADING = 'COMPANY_DETAILS/SET_TYPE_LOADING',
  SET_COMPANY_DETAILS = 'COMPANY_DETAILS/SET_COMPANY_DETAILS',
}

export interface SetTypeLoadingAction {
  type: CompanyDetailsActions.SET_TYPE_LOADING;
  payload: boolean;
}

export interface SetCompanyDetailsAction {
  type: CompanyDetailsActions.SET_COMPANY_DETAILS;
  payload: ICompany;
}

export type CompanyDetailsAction =
  | SetTypeLoadingAction
  | SetCompanyDetailsAction;

export interface CompanyDetailsState {
  isLoading: boolean;
  company: ICompany | {};
}
