import { ICompany } from '../types/entities';
import { http } from './restConfig';

export class ApiCompanies {
  static async loadCompanyDetails(id: number): Promise<ICompany> {
    try {
      const res = await http.get(`company/${id}$`);
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
