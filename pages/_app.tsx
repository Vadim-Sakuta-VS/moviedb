import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import '../src/components/MoviesSliderRow/MoviesSliderRow.scss';
import '../src/components/PaginationCustom/PaginationCustom.scss';
import { Provider } from 'react-redux';
import { store } from '../src/store/rootStore';
import styled from 'styled-components';
import PageWrapper from '../src/components/PageWrapper/PageWrapper';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const StyledApp = styled.div`
  min-height: 100vh;
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    router.beforePopState((state) => {
      state.options.scroll = false;
      return true;
    });
  }, []);

  return (
    <Provider store={store}>
      <StyledApp>
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </StyledApp>
    </Provider>
  );
};

export default MyApp;
