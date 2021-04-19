import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

const ControlSelect = ({
  control,
  name,
  label,
  isMulti,
  options,
  ...props
}) => {
  return (
    <Row className='flex-column mb-2'>
      <Col>
        <h6 className='mb-1'>{label}</h6>
      </Col>
      <Col>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select {...field} isMulti={isMulti} options={options} {...props} />
          )}
        />
      </Col>
    </Row>
  );
};

export default ControlSelect;
