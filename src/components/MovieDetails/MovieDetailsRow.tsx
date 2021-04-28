import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import clsx from 'clsx';

interface MovieDetailsRowProps {
  title?: string;
  value?: string | number;
  rowClassAdditional?: string;
}

export const MovieDetailsRow: FC<MovieDetailsRowProps> = ({
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
