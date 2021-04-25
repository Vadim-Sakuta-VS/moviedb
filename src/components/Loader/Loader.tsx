import React, { FC } from 'react';
import './Loader.scss';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = ({ isLoading }) => {
  return isLoading ? (
    <div className='loader d-flex justify-content-center align-items-center'>
      <Spinner animation='border' variant='success' />
    </div>
  ) : null;
};

// Loader.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
// };

export default Loader;
