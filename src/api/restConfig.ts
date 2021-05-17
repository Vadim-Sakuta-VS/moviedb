import axios from 'axios';
import { requiredGetParams, SERVER } from './constants';
import { stringifyGetParamsObj } from '../utils/utils';

export const http = axios.create({
  baseURL: SERVER,
  params: requiredGetParams,
  paramsSerializer: stringifyGetParamsObj,
  validateStatus: (status) => status <= 500,
});
