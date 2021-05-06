import React, { FC } from 'react';
import './Loader.scss';
import { Spinner } from 'react-bootstrap';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = ({ isLoading, children }) => {
  return isLoading ? (
    <div className='loader d-flex justify-content-center align-items-center'>
      <Spinner animation='border' variant='success' />
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loader;
