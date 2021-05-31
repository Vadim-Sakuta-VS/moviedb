import { IListResponse, ParamGetObj } from '../types/params';
import { http } from './restConfig';
import { ICompany, IMovie } from '../types/entities';

export class ApiSearch {
  static GET = {
    movies: '/search/movie',
    companies: '/search/company',
  };

  static async searchDataByQuery(
    URL: string,
    params: ParamGetObj
  ): Promise<IListResponse<IMovie> | IListResponse<ICompany>> {
    try {
      const res = await http.get(URL, { params });
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
