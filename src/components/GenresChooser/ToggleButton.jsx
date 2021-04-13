import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ToggleButton = ({ title, isActive, onClick, ...props }) => {
  return (
    <Button
      className='d-flex justify-content-center align-items-center'
      onClick={onClick}
      variant={isActive ? 'success' : 'light'}
      {...props}
    >
      {isActive && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#fff'
          className='mr-1'
        >
          <path d='M0 0h24v24H0V0z' fill='none' />
          <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
        </svg>
      )}
      <span>{title}</span>
    </Button>
  );
};

ToggleButton.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToggleButton;
