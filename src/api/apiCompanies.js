import { requiredGetParams, SERVER } from './constants';
import { stringifyGetParamsObj } from '../utils/utils';

export class ApiCompanies {
  static async loadCompaniesByQuery(paramsGETObj) {
    try {
      const paramsStr = stringifyGetParamsObj({
        ...requiredGetParams,
        ...paramsGETObj,
      });
      const res = await fetch(`${SERVER}/search/company${paramsStr}`);
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }

  static async loadCompanyDetails(id) {
    try {
      const paramsStr = stringifyGetParamsObj(requiredGetParams);
      const res = await fetch(`${SERVER}/company/${id}${paramsStr}`);
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }
}
