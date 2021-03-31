import {API_KEY, SERVER, SERVER_IMAGE} from "./constants";

export class ApiMovies {
    static async loadPopularMovieList(page) {
        try {
            let res = await fetch(`${SERVER}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
            return res.json();
        } catch (e) {
            console.log(e);
        }
    }

    static getImage(path) {
        return `${SERVER_IMAGE}${path}`;
    }
}