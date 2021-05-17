import { FC, useEffect } from 'react';

const ScrollToTopOnMount: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return null;
};

export default ScrollToTopOnMount;
