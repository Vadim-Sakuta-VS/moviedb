import { ValueType } from 'react-select';
import { StringOrNumberType } from './common';

export interface ISelectOption {
  value: string;
  label: StringOrNumberType;
}

export type SelectOptionDif = ISelectOption[] | ISelectOption;

export interface BaseSelectProps {
  label?: string;
  placeholder?: string;
  name: string;
  options: ValueType<ISelectOption, true> | ValueType<ISelectOption, false>;
}

export interface ISelectValue {
  id: StringOrNumberType;
  name: StringOrNumberType;
}
