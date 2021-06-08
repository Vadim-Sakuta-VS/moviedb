import { getMovieTypeTitle } from '../../src/utils/movieUtils';
import { useCustomRoute } from '../../src/hooks/useCustomRoute';
import { Col, Container, Row } from 'react-bootstrap';
import MovieList from '../../src/components/MovieList/MovieList';
import { GetServerSideProps, NextPage } from 'next';
import { MOVIE_TYPES } from '../../src/store/home/constants';
import { ApiMovies } from '../../src/api/apiMovies';
import { ParamGetObj } from '../../src/types/params';
import { IMovie } from '../../src/types/entities';
import { withHeaderLayout } from '../../src/components/HOC/withHeaderLayout';

type MoviesDataType = {
  movies: IMovie[];
  totalPages: number;
  type: string;
};

const MovieListByTypePage: NextPage<MoviesDataType> = ({
  movies,
  totalPages,
  type,
}) => {
  const typeTitle = getMovieTypeTitle(type);
  const { currentPage, onChangePage } = useCustomRoute({});

  return (
    <Container className='pt-2 pb-2'>
      <Row className='flex-column'>
        <Col>
          <h1 className='font-weight-bold'>{typeTitle}</h1>
        </Col>
        <Col className='p-0'>
          <MovieList
            currentPage={currentPage}
            totalPages={totalPages}
            movies={movies}
            onChangePage={onChangePage}
          />
        </Col>
      </Row>
    </Container>
  );
};

type ServerSideParamsType = {
  type: string;
};

export const getServerSideProps: GetServerSideProps<
  {},
  ServerSideParamsType
> = async ({ params, query }) => {
  if (!params) {
    return { notFound: true };
  }
  const isCorrectPath = Object.keys(MOVIE_TYPES).some(
    (key) => key.toLowerCase() === params.type
  );

  if (!isCorrectPath) {
    return { notFound: true };
  }

  const data = await ApiMovies.loadMovieList(
    ApiMovies.GET[params.type.toUpperCase()],
    query as ParamGetObj
  );

  return {
    props: {
      movies: data.results || [],
      totalPages: data.total_pages,
      type: params.type,
    },
  };
};

export default withHeaderLayout(MovieListByTypePage);
