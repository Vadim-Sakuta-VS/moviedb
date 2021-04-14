import { requiredGetParams, SERVER } from './constants';
import { createGetParamsStr } from '../utils/utils';

export class ApiCompanies {
  static async loadCompaniesByQuery(paramsGETObj) {
    try {
      const paramsStr = createGetParamsStr(requiredGetParams, paramsGETObj);
      const res = await fetch(`${SERVER}/search/company${paramsStr}`);
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }

  static async loadCompanyDetails(id) {
    try {
      const paramsStr = createGetParamsStr(requiredGetParams);
      const res = await fetch(`${SERVER}/company/${id}${paramsStr}`);
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }
}
