import React from 'react';
import Header from '../Header/Header';

export const withHeaderLayout = (Component: React.FC) => (
  <>
    <Header />
    <Component />
  </>
);
