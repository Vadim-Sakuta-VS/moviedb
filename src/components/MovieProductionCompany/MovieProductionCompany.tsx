import React, { FC } from 'react';
import './MovieProductionCompany.scss';
import { Col, Image } from 'react-bootstrap';
import { ApiMovies } from '../../api/apiMovies';
import clsx from 'clsx';
import { ImgPathType } from '../../types/common';

interface MovieProductionCompanyProps {
  logoPath: ImgPathType;
  companyName: string;
  colClassAdditional: string;
}

export const MovieProductionCompany: FC<MovieProductionCompanyProps> = ({
  logoPath,
  companyName,
  colClassAdditional,
}) => {
  const colClasses = clsx('col-auto', 'production-company', colClassAdditional);

  return (
    <Col className={colClasses}>
      <Image src={`${ApiMovies.getImage(logoPath)}`} width={100} rounded />
      <p className='mt-2'>{companyName}</p>
    </Col>
  );
};
