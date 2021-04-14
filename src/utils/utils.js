export function fillArrayFromTo(from, to) {
  const arr = [];

  for (let i = from; i <= to; i++) {
    arr.push(i);
  }

  return arr;
}

export function createGetParamsStr(...rest) {
  const params = rest.map((paramObj) => {
    const paramObjArr = Object.entries(paramObj).map((arr) => arr.join('='));
    return paramObjArr.join('&');
  });

  return `?${params.join('&')}`;
}
