import React, { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import ControlSelect from '../ControlSelect/ControlSelect';

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
      <ControlSelect
        control={control}
        name='with_genres'
        label='Genres'
        isMulti={true}
        options={values.with_genres}
      />
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
