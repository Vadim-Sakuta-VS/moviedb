import { parseGetParamsStr } from './utils';

export const getParamObj = () => {
  const paramObj = parseGetParamsStr(window.location.search);
  Object.entries(paramObj).forEach(([key, value]) => {
    if (value.includes('|')) {
      paramObj[key] = value.split('|');
      return;
    }
    paramObj[key] = value;
  });
  return paramObj;
};

export const createParamObj = (data) => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    key = key.replace('-', '.');

    if (Array.isArray(value)) {
      return { ...acc, [key]: value.map((v) => v.value).join('|') };
    } else if (typeof value === 'object') {
      return { ...acc, [key]: value.value };
    }
    return { ...acc, [key]: value };
  }, {});
};

export function getSelectedValues(valuesObj) {
  const paramObj = getParamObj();

  return Object.entries(paramObj).reduce((acc, [key, value]) => {
    const getSelectedObj = (id) => {
      id = id !== '' ? +id : id;
      const index = valuesObj[key].data.findIndex((v) => id === v.id);
      if (index !== -1) {
        return {
          value: valuesObj[key].data[index].id,
          label: valuesObj[key].data[index].name,
        };
      }
      return null;
    };

    if (Array.isArray(value)) {
      return {
        ...acc,
        [key.replace('.', '-')]: value.reduce((acc, vParam) => {
          let obj = getSelectedObj(vParam);
          return obj ? [...acc, obj] : acc;
        }, []),
      };
    } else if (valuesObj[key] && valuesObj[key].isShouldArray) {
      let obj = getSelectedObj(value);
      return obj ? { ...acc, [key.replace('.', '-')]: [obj] } : acc;
    }
    return { ...acc, [key.replace('.', '-')]: value };
  }, {});
}
