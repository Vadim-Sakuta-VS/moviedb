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
    if (Array.isArray(value)) {
      return { ...acc, [key]: value.map((v) => v.value).join('|') };
    }
    return { ...acc, [key]: value };
  }, {});
};

export function getSelectedValues(valuesObj) {
  const paramObj = getParamObj();

  return Object.entries(paramObj).reduce((acc, [key, value]) => {
    const getSelectedObj = (id) => {
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
        [key]: value.reduce((acc, vParam) => {
          let obj = getSelectedObj(+vParam);
          return obj ? [...acc, obj] : acc;
        }, []),
      };
    } else if (valuesObj[key] && valuesObj[key].isShouldArray) {
      let obj = getSelectedObj(+value);
      return obj ? { ...acc, [key]: obj } : acc;
    }
    return { ...acc, [key]: value };
  }, {});
}
