import React from 'react';
import { Col, Row } from 'react-bootstrap';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const MovieDetailsRow = ({
  title,
  value,
  children,
  rowClassAdditional,
}) => {
  const resultValue = value || children;
  const rowClasses = clsx('h5', rowClassAdditional);

  return (
    <Row className={rowClasses}>
      {title && <Col className='pr-0 col-auto font-weight-bold'>{title}:</Col>}
      {resultValue && <Col className='pr-0'>{resultValue}</Col>}
    </Row>
  );
};

MovieDetailsRow.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any,
  rowClassAdditional: PropTypes.string,
};
