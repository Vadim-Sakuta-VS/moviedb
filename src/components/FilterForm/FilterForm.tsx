import React, { FC, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import ControlSelect from '../ControlSelect/ControlSelect';
import ControlFromTo from '../ControlFromTo/ControlFromTo';
import { ISelectOption, SelectOptionDif } from '../../types/types';
import { SubmitHandler } from 'react-hook-form';
import { ParamObjType } from '../../utils/selectUtils';

export interface FilterFormValues extends ParamObjType {
  with_genres: ISelectOption[];
  primary_release_year: SelectOptionDif;
  vote_average: {
    gte: SelectOptionDif;
    lte: SelectOptionDif;
  };
  sort_by: SelectOptionDif;
  page: string | number;
}

interface FilterFormProps {
  onSubmit: (data: FilterFormValues) => void;
  defaultValues: FilterFormValues;
  values: FilterFormValues;
  isLoading: boolean;
}

const FilterForm: FC<FilterFormProps> = ({
  onSubmit,
  defaultValues,
  values,
  isLoading,
}) => {
  const { control, handleSubmit, reset } = useForm<FilterFormValues>({
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  const onSubmitHandler: SubmitHandler<FilterFormValues> = (data) => {
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)} className='bg-light p-2'>
      <Row className='mb-2'>
        <Col className='col-12 col-sm-6'>
          <ControlSelect
            control={control}
            name='with_genres'
            label='Genres'
            isMulti={true}
            options={values.with_genres as SelectOptionDif}
          />
        </Col>
        <Col className='col-12 col-sm-6'>
          <ControlSelect
            control={control}
            name='primary_release_year'
            label='Release year'
            isMulti={false}
            options={values.primary_release_year as SelectOptionDif}
          />
        </Col>
      </Row>
      <ControlFromTo
        control={control}
        title='Vote average'
        fromSelectProps={{
          label: 'Greater:',
          name: 'vote_average.gte',
          options: values.vote_average.gte,
        }}
        toSelectProps={{
          label: 'Less:',
          name: 'vote_average.lte',
          options: values.vote_average.lte,
        }}
      />
      <Row>
        <Col className='col-12 col-sm-6'>
          <ControlSelect
            control={control}
            name='sort_by'
            label='Sort by'
            isMulti={false}
            options={values.sort_by as SelectOptionDif}
          />
        </Col>
      </Row>
      <Row className='justify-content-end'>
        <Col className='col-auto'>
          <ButtonLoad
            type='submit'
            textValue='Search'
            isLoading={isLoading}
            style={{ minWidth: '6rem', minHeight: '38px' }}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
