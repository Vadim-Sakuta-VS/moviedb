import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Control } from 'react-hook-form';
import { BaseSelectProps } from '../../types/types';
import { FC } from 'react';

interface ControlSelectProps extends BaseSelectProps {
  control: Control<any>;
  isMulti: boolean;
  asRow?: boolean;
}

const ControlSelect: FC<ControlSelectProps> = ({
  control,
  name,
  label,
  isMulti,
  options,
  asRow,
  ...props
}) => {
  const classes = clsx(
    'mb-2',
    asRow && 'align-items-center',
    !asRow && 'flex-column'
  );

  return (
    <Row className={classes}>
      <Col className='col-auto pr-0'>
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

// ControlSelect.propTypes = {
//   control: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string,
//   isMulti: PropTypes.bool.isRequired,
//   asRow: PropTypes.bool,
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
//         .isRequired,
//       label: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
//         .isRequired,
//     })
//   ),
// };

export default ControlSelect;
