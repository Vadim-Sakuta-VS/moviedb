import React, { FC, useEffect } from 'react';
import './MovieDetails.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { MovieProductionCompany } from '../MovieProductionCompany/MovieProductionCompany';
import { MovieDetailsRow } from './MovieDetailsRow';
import { ApiMovies } from '../../api/apiMovies';
import {
  addMediaToBasicList,
  deleteRatingMovie,
  loadMovieAccountState,
  loadMovieDetails,
  rateMovie,
} from '../../store/movieDetails/effects';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMovieAccountState,
  selectMovieAccountStateLoading,
  selectMovieBasicListLoading,
  selectMovieDetails,
  selectMovieDetailsLoading,
} from '../../store/movieDetails/selectors';
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import MovieReviews from '../MovieReviews/MovieReviews';
import MovieRating from '../MovieRating/MovieRating';
import { selectUserAuthStatus } from '../../store/userAuth/selectors';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import { MovieTypesOnlyBooleanState } from '../../store/movieDetails/reducers';

interface MovieDetailsParams {
  id: string;
}

const MovieDetails: FC = () => {
  const { id } = useParams<MovieDetailsParams>();
  const history = useHistory();
  const location = useLocation();
  const movie = useSelector(selectMovieDetails);
  const movieAccountState = useSelector(selectMovieAccountState);
  const isMovieAccountStateLoading = useSelector(
    selectMovieAccountStateLoading
  );
  const {
    favorite: isFavoriteLoading,
    watchlist: isWatchListLoading,
  } = useSelector(selectMovieBasicListLoading);
  const isLoading = useSelector(selectMovieDetailsLoading);
  const isAuth = useSelector(selectUserAuthStatus);
  const dispatch = useDispatch();

  const isCorrectId = () => !isNaN(+id) && +id > 0;

  useEffect(() => {
    if (isCorrectId()) {
      dispatch(loadMovieDetails(+id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (isCorrectId()) {
      dispatch(loadMovieAccountState(+id));
    }
  }, [isAuth]);

  if (isNaN(+id) || (!isNaN(+id) && +id < 1)) {
    return <Redirect to='/page404' />;
  }

  const isRedirectToLogin = () => {
    if (!isAuth) {
      history.push('/login', { from: location });
      return true;
    }
    return false;
  };

  const onClickRating = (value: number) => {
    if (isRedirectToLogin()) {
      return;
    }

    if (
      (typeof movieAccountState.rated === 'object' &&
        movieAccountState.rated.value !== value) ||
      !movieAccountState.rated
    ) {
      dispatch(rateMovie(+id, value));
      return;
    }
    dispatch(deleteRatingMovie(+id));
  };

  const onClickFavoriteButtonHandler = () => {
    if (isRedirectToLogin()) {
      return;
    }

    dispatch(
      addMediaToBasicList(
        MovieTypesOnlyBooleanState.favorite,
        ApiMovies.media_types.movie,
        +id
      )
    );
  };

  const onClickWatchlistButtonHandler = () => {
    if (isRedirectToLogin()) {
      return;
    }

    dispatch(
      addMediaToBasicList(
        MovieTypesOnlyBooleanState.watchlist,
        ApiMovies.media_types.movie,
        +id
      )
    );
  };

  const budget = `${movie.budget}$`;
  const genres = movie.genres && movie.genres.map((g) => g.name).join(', ');
  const revenue = `${movie.revenue}$`;
  const runtime = `${movie.runtime}min`;
  const tagline = movie.tagline ? `"${movie.tagline}"` : '---';
  const releaseDate = new Date(movie.release_date).toLocaleDateString();
  const productionCountriesElements =
    movie.production_countries &&
    movie.production_countries.map((c) => <li key={c.iso_3166_1}>{c.name}</li>);
  const productionCompaniesElements =
    movie.production_companies &&
    movie.production_companies.map((c) => (
      <MovieProductionCompany
        key={c.id}
        logoPath={c.logo_path}
        companyName={c.name}
        colClassAdditional='production-companies__item'
      />
    ));

  return isLoading || isMovieAccountStateLoading || movie.id !== +id ? (
    <Loader isLoading={isLoading} />
  ) : (
    <Container className='pt-2 pb-2 movie-details'>
      <Row className='movie-details__main-row'>
        <Col>
          <Image
            src={`${ApiMovies.getImage(movie.poster_path)}`}
            alt='Poster image'
            rounded
            className='w-100'
          />
        </Col>
        <Col>
          <Container>
            <Row className='justify-content-end'>
              <Col className='col-auto p-0'>
                <MovieRating
                  stop={10}
                  fractions={2}
                  initialRating={
                    typeof movieAccountState.rated === 'object'
                      ? movieAccountState.rated.value
                      : undefined
                  }
                  onClick={onClickRating}
                />
              </Col>
            </Row>
            <Row>
              <Col className='h3 mb-3 font-weight-bold border-bottom border-success'>
                {movie.title}
              </Col>
            </Row>
            <MovieDetailsRow title='Budget' value={budget} />
            <MovieDetailsRow title='Genres' value={genres} />
            <MovieDetailsRow title='Production countries'>
              {productionCountriesElements &&
              productionCountriesElements.length ? (
                <ul className='m-0 p-0' style={{ listStyle: 'none' }}>
                  {productionCountriesElements}
                </ul>
              ) : (
                '---'
              )}
            </MovieDetailsRow>
            <MovieDetailsRow title='Revenue' value={revenue} />
            <MovieDetailsRow title='Runtime' value={runtime} />
            <MovieDetailsRow title='Status' value={movie.status} />
            <MovieDetailsRow title='Release date' value={releaseDate} />
            <MovieDetailsRow title='Tagline' value={tagline} />
            <MovieDetailsRow title='Vote average'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='#ebcc34'
                className='bi bi-star mr-1'
                viewBox='0 0 16 16'
              >
                <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z' />
              </svg>
              {movie.vote_average}
            </MovieDetailsRow>
            <MovieDetailsRow title='Vote count' value={movie.vote_count} />
            <MovieDetailsRow
              title='Overview'
              value={movie.overview}
              rowClassAdditional='flex-column'
            />
            <MovieDetailsRow>
              <a href={movie.homepage} target='_blank' rel='noreferrer'>
                Home page
              </a>
            </MovieDetailsRow>
            <Row className='mt-4'>
              <Col className='col-auto mb-2'>
                <ButtonLoad
                  isLoading={isFavoriteLoading}
                  textValue={
                    movieAccountState.favorite
                      ? 'Delete from Favorite'
                      : 'Mark as Favorite'
                  }
                  isOutlineVariant={!movieAccountState.favorite}
                  onClick={onClickFavoriteButtonHandler}
                  style={{ minWidth: '11rem', minHeight: '38px' }}
                />
              </Col>
              <Col className='col-auto'>
                <ButtonLoad
                  isLoading={isWatchListLoading}
                  textValue={
                    movieAccountState.watchlist
                      ? 'Delete from Watchlist'
                      : 'Add to Watchlist'
                  }
                  isOutlineVariant={!movieAccountState.watchlist}
                  onClick={onClickWatchlistButtonHandler}
                  style={{ minWidth: '11rem', minHeight: '38px' }}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <hr className='divider' />
      <Row className='flex-column'>
        <Col className='h4 mb-4 text-center font-weight-bold'>
          Production companies
        </Col>
        <Col>
          <Container className='pl-5 pr-5'>
            <Row className='justify-content-center production-companies'>
              {productionCompaniesElements &&
              productionCompaniesElements.length ? (
                productionCompaniesElements
              ) : (
                <span className='text-center font-weight-bold text-secondary'>
                  Unknown
                </span>
              )}
            </Row>
          </Container>
        </Col>
      </Row>
      <hr className='divider' />
      <MovieReviews id={movie.id} />
    </Container>
  );
};

export default MovieDetails;
