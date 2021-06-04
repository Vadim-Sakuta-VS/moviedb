import React from 'react';
import Link from 'next/link';

export const withLinkWrapper = (href: string, Component: JSX.Element) => {
  return (
    <Link href={href}>
      <a>{Component}</a>
    </Link>
  );
};
