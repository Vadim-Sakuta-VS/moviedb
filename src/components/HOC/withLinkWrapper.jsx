import React from 'react';
import { Link } from 'react-router-dom';

export const withLinkWrapper = (href, Component) => {
  return <Link to={href}>{Component}</Link>;
};
