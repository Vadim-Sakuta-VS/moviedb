import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({ isLoading }) => {
  return isLoading ? (
    <div className='vh-100 vw-100 d-flex justify-content-center align-items-center'>
      <Spinner animation='border' variant='success' />
    </div>
  ) : null;
};

export default Loader;
