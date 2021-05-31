import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Controller, RegisterOptions } from 'react-hook-form';
import Select from 'react-select';
import clsx from 'clsx';
import { Control } from 'react-hook-form';
import { BaseSelectProps } from '../../types/uiTypes';
import { FC } from 'react';

interface ControlSelectProps extends BaseSelectProps {
  control: Control<any>;
  isMulti: boolean;
  asRow?: boolean;
  rules?: RegisterOptions;
}

const ControlSelect: FC<ControlSelectProps> = ({
  control,
  name,
  label,
  isMulti,
  options,
  asRow,
  rules,
  ...props
}) => {
  const classes = clsx(
    'mb-2',
    asRow && 'align-items-center',
    !asRow && 'flex-column'
  );

  return (
    <Row className={classes}>
      {label && (
        <Col className='col-auto pr-0'>
          <h6 className='mb-1'>{label}</h6>
        </Col>
      )}
      <Col>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <Row className='flex-column'>
              <Col>
                <Select
                  {...field}
                  isMulti={isMulti}
                  isClearable={true}
                  options={options as readonly any[] | undefined}
                  {...props}
                  styles={{
                    control: (base) =>
                      error ? { ...base, borderColor: '#dc3545' } : base,
                  }}
                />
              </Col>
              {error && (
                <Col className='text-danger'>
                  <small>{error.message}</small>
                </Col>
              )}
            </Row>
          )}
        />
      </Col>
    </Row>
  );
};

export default ControlSelect;
