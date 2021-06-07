import React, { FC } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import ControlTextInput from '../ControlTextInput/ControlTextInput';
import ControlSelect from '../ControlSelect/ControlSelect';
import { ISelectOption } from '../../types/uiTypes';

interface SearchFormProps {
  searchTypesOptions: ISelectOption[];
  onChange?: (value: string) => void;
  onSubmit: (data: SearchFormValues) => void;
  isLoading?: boolean;
  defaultValues?: SearchFormValues;
}

export type SearchFormValues = {
  query: string;
  search_type: ISelectOption;
};

const SearchForm: FC<SearchFormProps> = ({
  searchTypesOptions,
  onChange,
  onSubmit,
  isLoading,
  defaultValues = {},
  ...props
}) => {
  const { control, handleSubmit } = useForm<SearchFormValues>({
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<SearchFormValues> = (data) => {
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)} className='w-100' {...props}>
      <Row className='flex-column'>
        <Col className='p-0 mb-2'>
          <ControlSelect
            placeholder='Search type'
            control={control}
            isMulti={false}
            name='search_type'
            options={searchTypesOptions}
            rules={{ required: 'Required field!' }}
          />
        </Col>
        <Col className='p-0 mb-3'>
          <ControlTextInput
            name='query'
            rules={{ required: 'Required field!' }}
            placeholder='Query...'
            onChange={onChange}
            control={control}
          />
        </Col>
        <Col className='col-auto p-0 d-flex justify-content-end'>
          <ButtonLoad
            type='submit'
            textValue='Search'
            isLoading={!!isLoading}
            style={{ minWidth: '6rem', minHeight: '38px' }}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
