import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import '../src/components/MoviesSliderRow/MoviesSliderRow.scss';
import '../src/components/PaginationCustom/PaginationCustom.scss';
import { Provider } from 'react-redux';
import { store } from '../src/store/rootStore';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
