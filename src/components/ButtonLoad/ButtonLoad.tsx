import React, { FC } from 'react';
import { Button, Spinner } from 'react-bootstrap';

interface ButtonLoadProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: string;
  isLoading: boolean;
  textValue?: string;
  isOutlineVariant?: boolean;
  handleOnClick?: () => void;
  classStyle?: 'success' | 'primary' | 'danger';
}

const ButtonLoad: FC<ButtonLoadProps> = ({
  isLoading,
  textValue,
  isOutlineVariant,
  handleOnClick,
  classStyle,
  children,
  ...props
}) => {
  return (
    <Button
      disabled={isLoading}
      variant={
        isOutlineVariant
          ? `outline-${classStyle || 'success'}`
          : classStyle || 'success'
      }
      className='d-inline-flex justify-content-center align-items-center'
      onClick={handleOnClick}
      {...props}
    >
      {isLoading ? (
        <Spinner
          size='sm'
          animation='border'
          variant={isOutlineVariant ? classStyle || 'success' : 'light'}
        />
      ) : (
        children || `${textValue}`
      )}
    </Button>
  );
};

export default ButtonLoad;
