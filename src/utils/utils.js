import qs from 'qs';

export function fillArrayFromTo(from, to) {
  const arr = [];

  for (let i = from; i <= to; i++) {
    arr.push(i);
  }

  return arr;
}

export function stringifyGetParamsObj(obj) {
  return qs.stringify(obj, { addQueryPrefix: true });
}
