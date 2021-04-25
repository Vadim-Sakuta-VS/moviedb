import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import ControlSelect from '../ControlSelect/ControlSelect';
import PropTypes from 'prop-types';
import { Control } from 'react-hook-form';
import { BaseSelectProps } from '../../types/types';

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

// const propTypesSelect = PropTypes.shape({
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
//         .isRequired,
//       label: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
//         .isRequired,
//     })
//   ),
// });
//
// ControlFromTo.propTypes = {
//   control: PropTypes.object.isRequired,
//   title: PropTypes.string.isRequired,
//   fromSelectProps: propTypesSelect,
//   toSelectProps: propTypesSelect,
// };

export default ControlFromTo;
