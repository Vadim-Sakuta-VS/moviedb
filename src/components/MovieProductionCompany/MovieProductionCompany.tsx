import React, { FC } from 'react';
import './MovieProductionCompany.scss';
import { Col, Image } from 'react-bootstrap';
import { ApiMovies } from '../../api/apiMovies';
import clsx from 'clsx';
import PropTypes from 'prop-types';

interface MovieProductionCompanyProps {
  logoPath: string | null;
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
//
// MovieProductionCompany.propTypes = {
//   logoPath: PropTypes.oneOfType([
//     PropTypes.string.isRequired,
//     PropTypes.oneOf([null]).isRequired,
//   ]),
//   companyName: PropTypes.string.isRequired,
//   colClassAdditional: PropTypes.string,
// };
