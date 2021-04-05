import React from 'react';
import './MovieProductionCompany.scss';
import { Col, Image } from 'react-bootstrap';
import { ApiMovies } from '../../api/apiMovies';
import clsx from 'clsx';

export const MovieProductionCompany = ({
  logoPath,
  companyName,
  colClassAdditional,
}) => {
  const colClasses = clsx('col-auto', 'production-company', colClassAdditional);

  return (
    <Col className={colClasses}>
      <Image
        src={`${ApiMovies.getImage(logoPath)}`}
        width={100}
        height={100}
        rounded
      />
      <p className='mt-2'>{companyName}</p>
    </Col>
  );
};
