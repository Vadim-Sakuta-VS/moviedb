import { requiredGetParams, SERVER } from './constants';
import { stringifyGetParamsObj } from '../utils/utils';
import { ICompany, IListResponse, ParamGetObj } from '../types/types';

export class ApiCompanies {
  static async loadCompaniesByQuery(
    paramsGETObj: ParamGetObj
  ): Promise<IListResponse<ICompany>> {
    try {
      const paramsStr = stringifyGetParamsObj({
        ...requiredGetParams,
        ...paramsGETObj,
      });
      const res = await fetch(`${SERVER}/search/company${paramsStr}`);
      return await res.json();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async loadCompanyDetails(id: number): Promise<ICompany> {
    try {
      const paramsStr = stringifyGetParamsObj(requiredGetParams);
      const res = await fetch(`${SERVER}/company/${id}${paramsStr}`);
      return await res.json();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
