import { ISelectOption, ISelectValue } from '../types/uiTypes';
import { ParamObjReturnType, ParamObjType } from '../types/params';

export const createParamObj = (data: ParamObjType): ParamObjReturnType => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    if (Array.isArray(value) && value.length) {
      return { ...acc, [key]: value.map((v) => v.value).join(',') };
    } else if (
      value &&
      typeof value === 'object' &&
      (value as ISelectOption).value
    ) {
      return { ...acc, [key]: (value as ISelectOption).value };
    } else if (
      value &&
      typeof value === 'object' &&
      Object.keys(value).length
    ) {
      return { ...acc, [key]: createParamObj(value as ParamObjType) };
    }
    return { ...acc, [key]: value || '' };
  }, {});
};

/**
 * @param numbers is array of numbers
 * @return array of objects [{id:, name:}...]
 */
export function createValuesStructureNumbers(
  numbers: number[]
): ISelectValue[] {
  return numbers.map((el) => ({
    id: el,
    name: el,
  }));
}

/**
 * @param initialValues should have such structure as [{id:, name:}...]
 */
export function createValuesSelectField(
  initialValues: ISelectValue[]
): ISelectOption[] {
  return initialValues.map((v) => ({
    value: v.id.toString(),
    label: v.name,
  }));
}

/**
 * @param defaultStr contains ids string of values, ids could to separate by symbol |
 * @param values should have such structure as [{id:, name:}...]
 */
export function getDefaultValuesSelectField(
  defaultStr: any,
  values: ISelectValue[]
): ISelectOption[] {
  if (typeof defaultStr !== 'string') {
    defaultStr = '';
  }

  const ids = (defaultStr as string).split(',');
  return ids.reduce((acc: ISelectOption[], id) => {
    if (id) {
      const defaultValueIndex = values.findIndex(
        (v) => v.id === +id || v.id === id
      );
      if (defaultValueIndex !== -1) {
        return [
          ...acc,
          {
            value: values[defaultValueIndex].id.toString(),
            label: values[defaultValueIndex].name,
          },
        ];
      }
    }
    return acc;
  }, []);
}
