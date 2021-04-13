import { API_KEY, SERVER } from './constants';

export class ApiCompanies {
  static async loadCompaniesByQuery(query, page) {
    try {
      const res = await fetch(
        `${SERVER}/search/company?query=${query}&api_key=${API_KEY}&page=${page}`
      );
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }

  static async loadCompanyDetails(id) {
    try {
      const res = await fetch(`${SERVER}/company/${id}?api_key=${API_KEY}`);
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }
}
