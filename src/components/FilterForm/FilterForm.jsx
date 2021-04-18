import React, { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import ButtonLoad from '../ButtonLoad/ButtonLoad';

const FilterForm = ({ onSubmit, defaultValues, values }) => {
  console.log(defaultValues);
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
      <Row className='flex-column mb-2'>
        <Col>
          <h6 className='mb-1'>Genres</h6>
        </Col>
        <Col>
          <Controller
            name='with_genres'
            control={control}
            render={({ field }) => (
              <Select {...field} isMulti options={values.with_genres} />
            )}
          />
        </Col>
      </Row>
      <Row className='justify-content-end'>
        <Col className='col-auto'>
          <ButtonLoad
            type='submit'
            textValue='Search'
            isLoading={false}
            style={{ minWidth: '6rem', minHeight: '38px' }}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
