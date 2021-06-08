import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectUserAuthStatus } from '../../store/userAuth/selectors';
import { isClientSide } from '../../utils/utils';

const withAuth = (Component: React.FC) => {
  return (props: any) => {
    const router = useRouter();
    const isAuth = useSelector(selectUserAuthStatus);

    if (isClientSide() && !isAuth) {
      router.replace({ pathname: '/login', query: { asPath: router.asPath } });
    }

    return <Component {...props} />;
  };
};

export default withAuth;
