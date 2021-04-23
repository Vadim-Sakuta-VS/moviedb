import React, { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import ControlSelect from '../ControlSelect/ControlSelect';
import ControlFromTo from '../ControlFromTo/ControlFromTo';

const FilterForm = ({ onSubmit, defaultValues, values, isLoading }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  const onSubmitHandler = (data) => {
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
            options={values.with_genres}
          />
        </Col>
        <Col className='col-12 col-sm-6'>
          <ControlSelect
            control={control}
            name='primary_release_year'
            label='Release year'
            isMulti={false}
            options={values.primary_release_year}
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
            options={values.sort_by}
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
