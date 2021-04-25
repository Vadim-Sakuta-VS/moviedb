import { ParamGetObj } from '../types/types';

export const API_KEY = 'b49300e53d697b3e290cbc26dc82c029';
export const SERVER = 'https://api.themoviedb.org/3';
export const SERVER_IMAGE = 'https://image.tmdb.org/t/p/w500';

export const requiredGetParams: ParamGetObj = {
  api_key: API_KEY,
  language: 'en-US',
};
