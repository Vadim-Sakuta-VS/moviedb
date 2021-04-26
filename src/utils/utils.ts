import qs from 'qs';
import { ParamGetObj } from '../types/types';

export function fillArrayFromTo(from: number, to: number) {
  const arr = [];

  for (let i = from; i <= to; i++) {
    arr.push(i);
  }

  return arr;
}

export const TYPES_SORTING = {
  ASC: 'ASC',
  DESC: 'DESC',
};
/**
 * @param arr array of objects, if field = undefined, expected array of numbers
 * @param field sort by name field
 * @param typeSorting - use TYPES_SORTING object
 */
export function sortArray(
  arr: any[],
  field: string | null,
  typeSorting: string = TYPES_SORTING.ASC
) {
  const newArr = [...arr];

  const sortObjStringsAsc = (obj1: any, obj2: any) =>
    obj1[field!].localeCompare(obj2[field!]);
  const sortObjStringsDesc = (obj1: any, obj2: any) =>
    obj2[field!].localeCompare(obj1[field!]);
  const sortObjNumbersAsc = (obj1: any, obj2: any) =>
    +obj1[field!] - +obj2[field!];
  const sortObjNumbersDesc = (obj1: any, obj2: any) =>
    +obj2[field!] - +obj1[field!];
  const sortStringsAsc = (str1: string, str2: string) =>
    str1.localeCompare(str2);
  const sortStringsDesc = (str1: string, str2: string) =>
    str2.localeCompare(str1);
  const sortNumbersAsc = (num1: number, num2: number) => num1 - num2;
  const sortNumbersDesc = (num1: number, num2: number) => num2 - num1;

  if (arr.length && typeof arr[0] === 'object') {
    if (typeof arr[0][field!] === 'string') {
      return typeSorting === TYPES_SORTING.ASC
        ? newArr.sort(sortObjStringsAsc)
        : newArr.sort(sortObjStringsDesc);
    }
    return typeSorting === TYPES_SORTING.ASC
      ? newArr.sort(sortObjNumbersAsc)
      : newArr.sort(sortObjNumbersDesc);
  } else if (arr.length && typeof arr[0] === 'string') {
    return typeSorting === TYPES_SORTING.ASC
      ? newArr.sort(sortStringsAsc)
      : newArr.sort(sortStringsDesc);
  }

  return typeSorting === TYPES_SORTING.ASC
    ? newArr.sort(sortNumbersAsc)
    : newArr.sort(sortNumbersDesc);
}

export function stringifyGetParamsObj(obj: ParamGetObj) {
  return qs.stringify(obj, {
    addQueryPrefix: true,
    allowDots: true,
  });
}

export function parseGetParamsStr(str: string) {
  return qs.parse(str, { ignoreQueryPrefix: true, allowDots: true });
}
