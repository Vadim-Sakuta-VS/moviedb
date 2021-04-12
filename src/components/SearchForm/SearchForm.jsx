import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import PropTypes from 'prop-types';
import Control from '../Control/Control';

const SearchForm = ({
  queryValue,
  onChange,
  onSubmit,
  isLoading,
  ...props
}) => {
  const { control, handleSubmit } = useForm();

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)} className='w-100' {...props}>
      <Row>
        <Col className='p-0'>
          <Control
            name='query'
            rules={{ required: 'Required field!' }}
            defaultValue={queryValue}
            placeholder='Query...'
            onChange={onChange}
            control={control}
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
