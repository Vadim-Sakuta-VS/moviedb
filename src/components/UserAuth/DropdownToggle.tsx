import React, { FC, ForwardedRef, MouseEvent } from 'react';

type CustomToggleProps = {
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
};

const DropdownToggle: FC<CustomToggleProps> = React.forwardRef(
  ({ children, onClick }, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a
      href=''
      ref={ref}
      className='text-success'
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  )
);

export default DropdownToggle;
