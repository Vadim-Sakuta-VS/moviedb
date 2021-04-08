import { API_KEY, SERVER, SERVER_IMAGE } from './constants';

export class ApiMovies {
  static async loadPopularMovieList(page) {
    try {
      const res = await fetch(
        `${SERVER}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      );
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }

  static getImage(path) {
    return `${SERVER_IMAGE}${path}`;
  }

  static async loadMovieDetails(id) {
    try {
      const res = await fetch(
        `${SERVER}/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }

  static async loadMovieReviews(id, page) {
    try {
      const res = await fetch(
        `${SERVER}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
      );
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }
}
