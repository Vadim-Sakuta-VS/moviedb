import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import PropTypes from 'prop-types';

const SearchForm = ({
  queryValue,
  onChange,
  onSubmit,
  isLoading,
  ...props
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onChangeHandler = (e, filedOnChange) => {
    onChange(e.target.value);
    filedOnChange(e);
  };

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)} className='w-100' {...props}>
      <Row>
        <Col className='p-0'>
          <Controller
            name='query'
            control={control}
            defaultValue=''
            rules={{ required: 'Required field!' }}
            render={({ field }) => (
              <Row className='m-0' style={{ position: 'relative' }}>
                <Form.Control
                  placeholder='Query...'
                  isInvalid={errors.query}
                  {...field}
                  onChange={
                    onChange
                      ? (e) => onChangeHandler(e, field.onChange)
                      : field.onChange
                  }
                />
                {errors.query && (
                  <Form.Text
                    className='text-danger'
                    style={{ position: 'absolute', top: '100%', left: 0 }}
                  >
                    {errors.query.message}
                  </Form.Text>
                )}
              </Row>
            )}
          />
        </Col>
        <Col className='col-auto p-0'>
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

SearchForm.propTypes = {
  queryValue: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchForm;
