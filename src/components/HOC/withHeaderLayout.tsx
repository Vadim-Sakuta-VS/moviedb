import React from 'react';
import Header from '../Header/Header';
import { NextPage } from 'next';

export const withHeaderLayout = (Component: NextPage<any>) => {
  return (props: any) => (
    <>
      <Header />
      <Component {...props} />
    </>
  );
};
