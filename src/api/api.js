const API_KEY = 'b49300e53d697b3e290cbc26dc82c029';
const SERVER = 'https://api.themoviedb.org/3';
const SERVER_IMAGE = 'https://image.tmdb.org/t/p/w500';

export const API = {
    getPopularMoviesURL(page) {
        return `${SERVER}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    },
    getImageURL(subPath) {
        return `${SERVER_IMAGE}{subPath}`
    }
}