import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectUserAuthStatus } from '../../store/userAuth/selectors';

const withAuth = (Component: React.FC) => {
  return (props: any) => {
    const router = useRouter();
    const isAuth = useSelector(selectUserAuthStatus);

    if (typeof window !== 'undefined' && !isAuth) {
      router.replace({ pathname: '/login', query: { asPath: router.asPath } });
    }

    return <Component {...props} />;
  };
};

export default withAuth;
