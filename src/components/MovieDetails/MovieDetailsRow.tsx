import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

interface MovieDetailsRowProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  value?: string | number;
}

export const MovieDetailsRow: FC<MovieDetailsRowProps> = ({
  title,
  value,
  children,
  style,
}) => {
  const resultValue = value || children;

  return (
    <Row className='h5' style={style}>
      {title && <Col className='pr-0 col-auto font-weight-bold'>{title}:</Col>}
      {resultValue && <Col className='pr-0'>{resultValue}</Col>}
    </Row>
  );
};
