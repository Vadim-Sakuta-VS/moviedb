import React, { FC, useEffect, useState } from 'react';
import { loadUserDataDetails } from '../../store/userAuth/effects';
import { useDispatch, useSelector } from 'react-redux';
import Backdrop from '../Backdrop/Backdrop';
import { selectAuthLoading } from '../../store/userAuth/selectors';
import { Router } from 'next/router';

const PageWrapper: FC = ({ children }) => {
  const isAuthLoading = useSelector(selectAuthLoading);
  const [pageLoading, setPageLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserDataDetails());

    const startLoading = () => setPageLoading(true);
    const endLoading = () => setPageLoading(false);

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', endLoading);
    Router.events.on('routeChangeError', endLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', endLoading);
      Router.events.off('routeChangeError', endLoading);
    };
  }, []);

  return (
    <>
      <Backdrop
        spinnerVariant='success'
        isVisible={isAuthLoading || pageLoading}
      />
      {children}
    </>
  );
};

export default PageWrapper;
