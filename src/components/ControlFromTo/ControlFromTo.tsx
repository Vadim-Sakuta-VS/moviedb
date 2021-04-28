import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import ControlSelect from '../ControlSelect/ControlSelect';
import { Control } from 'react-hook-form';
import { BaseSelectProps } from '../../types/uiTypes';

interface ControlFromToProps {
  control: Control<any>;
  title: string;
  fromSelectProps: BaseSelectProps;
  toSelectProps: BaseSelectProps;
}

const ControlFromTo: FC<ControlFromToProps> = ({
  control,
  title,
  fromSelectProps,
  toSelectProps,
}) => {
  return (
    <Row className='flex-column'>
      <Col>
        <h6 className='mb-1'>{title}</h6>
      </Col>
      <Col>
        <Row>
          <Col className='col-12 col-sm-6'>
            <Row className='align-items-center'>
              <Col>
                <ControlSelect
                  control={control}
                  name={fromSelectProps.name}
                  label={fromSelectProps.label}
                  isMulti={false}
                  asRow={true}
                  options={fromSelectProps.options}
                />
              </Col>
            </Row>
          </Col>
          <Col className='col-12 col-sm-6'>
            <Row className='align-items-center'>
              <Col>
                <ControlSelect
                  control={control}
                  name={toSelectProps.name}
                  label={toSelectProps.label}
                  isMulti={false}
                  asRow={true}
                  options={toSelectProps.options}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ControlFromTo;
