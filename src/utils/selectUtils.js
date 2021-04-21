export const createParamObj = (data) => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    if (Array.isArray(value) && value.length) {
      return { ...acc, [key]: value.map((v) => v.value).join('|') };
    } else if (typeof value === 'object' && value.value) {
      return { ...acc, [key]: value.value };
    } else if (typeof value === 'object' && Object.keys(value).length) {
      return { ...acc, [key]: createParamObj(value) };
    }
    return { ...acc, [key]: value };
  }, {});
};

/**
 * @param numbers is array of numbers
 * @return array of objects [{id:, name:}...]
 */
export function createValuesStructureNumbers(numbers) {
  return numbers.map((el) => ({
    id: el,
    name: el,
  }));
}

/**
 * @param initialValues should have such structure as [{id:, name:}...]
 */
export function createValuesSelectField(initialValues) {
  return initialValues.map((v) => ({
    value: v.id,
    label: v.name,
  }));
}

/**
 * @param defaultStr contains ids string of values, ids could to separate by symbol |
 * @param values should have such structure as [{id:, name:}...]
 */
export function getDefaultValuesSelectField(defaultStr = '', values) {
  if (typeof defaultStr !== 'string') {
    defaultStr = '';
  }

  const ids = defaultStr.split('|');
  return ids.reduce((acc, id) => {
    if (id) {
      const defaultValueIndex = values.findIndex((v) => v.id === +id);
      if (defaultValueIndex !== -1) {
        return [
          ...acc,
          {
            value: values[defaultValueIndex].id,
            label: values[defaultValueIndex].name,
          },
        ];
      }
    }
    return acc;
  }, []);
}
