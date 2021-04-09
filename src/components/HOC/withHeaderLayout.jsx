import Header from '../Header/Header';

export const withHeaderLayout = (Component) => (
  <>
    <Header />
    <Component />
  </>
);
