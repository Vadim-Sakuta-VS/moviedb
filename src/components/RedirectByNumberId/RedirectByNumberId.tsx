import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

type RedirectByNumberIdProps = {
  id: any;
};

const RedirectByNumberId: FC<RedirectByNumberIdProps> = ({ id, children }) => {
  if (isNaN(+id) || (!isNaN(+id) && +id < 1)) {
    return <Redirect to='/page404' />;
  }

  return <>{children}</>;
};

export default RedirectByNumberId;
