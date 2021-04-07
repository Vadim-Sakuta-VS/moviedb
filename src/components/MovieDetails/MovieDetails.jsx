import React, { useEffect } from 'react';
import './MovieDetails.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { MovieProductionCompany } from '../MovieProductionCompany/MovieProductionCompany';
import { MovieDetailsRow } from './MovieDetailsRow';
import { ApiMovies } from '../../api/apiMovies';
import { loadMovieDetails } from '../../store/movieDetails/effects';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMovieDetails,
  selectMovieDetailsLoading,
} from '../../store/movieDetails/selectors';
import { Redirect, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import MovieReview from '../MovieReview/MovieReview';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = useSelector(selectMovieDetails);
  const isLoading = useSelector(selectMovieDetailsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isNaN(id) && id > 0) {
      dispatch(loadMovieDetails(id));
    }
  }, [id, dispatch]);

  if (isNaN(id) || (!isNaN(id) && id < 1)) {
    return <Redirect to='/page404' />;
  }

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

  const testAuthor = {
    name: '',
    username: 'JPV852',
    avatar_path: '/xNLOqXXVJf9m7WngUMLIMFsjKgh.jpg',
    rating: 7,
  };
  const reviewTestContent = `If you enjoy reading my Spoiler-Free reviews, please follow
                    my blog @ https://www.msbreviews.com After years of
                    outstanding effort from passionate fans, Warner Bros.
                    finally decided to give Zack Snyder the opportunity to
                    finish his movie on his own terms. 2017's Justice League
                    went through massive production issues - explained in my
                    review of said film - and despite years of extremely
                    tiresome, toxic discourse on social media, the famous Snyder
                    Cut got a controversy-inducing budget to complete an
                    undoubtedly unfinished cut. A crucial disclaimer: you'll see
                    countless reviews based on wholly different approaches. Some
                    people will review it as a standalone, regular movie, while
                    others will look at it as an extended/alternate cut of a
                    film previously released. I'm part of the latter group of
                    reviewers. I find it a bit unfair to criticize pacing issues
                    or an overlong runtime when the purpose of this cut is
                    precisely to show everything Snyder had in his hand.
                    Director/Extended/Ultimate Cut, call it what you feel it's
                    appropriate, but it's a four-hour movie, so many scenes will
                    inevitably drag or feel unnecessary and irrelevant. The
                    narrative is fundamentally the same, which means the
                    audience knows what's coming from a general perspective.
                    Still, I'm reviewing this version mostly on its own merits,
                    but without forgetting that it's not a regular theatrical
                    film and that it unquestionably builds upon what was already
                    released. Without getting into spoilers, I do have to write
                    this: the heavy marketing was incredibly misleading, and I
                    don't doubt for a second that many fans will feel
                    disappointed regarding certain story points and particular
                    characters. The whole "it's a totally distinct movie" or
                    "Joss Whedon only used 10% of Snyder's footage" were nothing
                    more than false publicity for a cut that honestly didn't
                    need it. Out of the 119 minutes of the 2017's version,
                    probably around 80/90 minutes are also in the Snyder Cut,
                    which will be surprising for people who expected something
                    entirely unique. The base of the narrative is identical,
                    most scenes are just extended versions of the original, but
                    there are a couple of significant new changes that
                    ultimately make Zack Snyder's Justice League better than its
                    "predecessor". The most impactful modification that
                    drastically changes the emotional core of the film is about
                    Cyborg. Ray Fisher's character goes from barely having any
                    remotely significant screentime in 2017 to being the heart
                    and soul of the movie. From his backstory to the development
                    across the runtime, Cyborg is undoubtedly the superhero that
                    gains the most with this cut, leaving as a complete,
                    compelling character who I genuinely cared for. On the other
                    hand, Aquaman and The Flash receive similar introductory
                    scenes with Batman, barely getting any sort of new
                    individual growth besides more action sequences. However,
                    once the League is assembled, the character interactions
                    increase, improving their team spirit and deeply elevating
                    the "Us United" storyline. The humor and tone remain lighter
                    than in other Snyder films, clearly something that the
                    filmmaker always had in mind for his version (Whedon only
                    added a couple of more jokes since most of them are present
                    in this cut). The intimidating runtime does negatively
                    affect the overall pacing, but the longer build-ups and
                    extensive dialogue scenes make the full movie much more
                    cohesive and coherent. Compared to the original's abrupt,
                    awful editing work, the Snyder Cut has a tremendously better
                    flow, giving time for information to sink in and characters
                    to get used to each other. I rather watch an overlong film
                    with a well-built story than the complete contrary. Some
                    color changes and tone adjustments also improve the movie's
                    consistency. Story-wise, besides the fantastic arc given to
                    Cyborg, there are a couple of changes that heavily affect
                    either a particular character or a secondary storyline, but
                    when it comes to the main narrative, it's more or less about
                    the same. Every action sequence with pre-existent footage is
                    visually improved and extended with scenes not seen before,
                    but the new VFX are as hit-and-miss as Junkie XL's score.
                    The latter mixes up so many different types of tracks and
                    music that it genuinely becomes a tad confusing. While some
                    scenes get an absolutely perfect, epic soundtrack, others
                    receive weird, out-of-place music distracting the scene
                    itself. There's only one change I definitely dislike: the R
                    rating brings horribly artificial, forced blood splashes and
                    out-of-nowhere cursing that simply don't belong in the film.
                    I know Snyder loves his gritty, bloody, gory action - as do
                    I - but either the whole movie is consistent with this type
                    of action, or some scenes will feel like they come from a
                    wholly separate film. A few bloody sequences work well
                    enough, but most just feel notably forced, while the cursing
                    feels ridiculously out-of-character at points. It's by far
                    the most incompatible aspect of the cut, but admittedly, one
                    that doesn't heavily impact my opinion. A common issue I
                    have with extended cuts is that these mostly add and rarely
                    remove. Snyder Cut partially breaks that rule, removing some
                    scenes from the 2017's version, supposedly only Whedon's
                    footage (which some people wrongly believe to be almost the
                    entire movie). While most of the decisions regarding this
                    process are efficient, there's a couple of them that not
                    only don't improve the respective storylines but actually
                    make them less powerful than the theatrical film. For
                    example, in Snyder Cut, the "bringing Superman back" arc
                    lacks an important character's take on the situation, having
                    in mind that character's past. It actually feels a bit
                    out-of-character that the viewers don't get to see what that
                    person thinks about a potentially devastating action.
                    Regarding Steppenwolf, his design looks better than the
                    terrible original, and his motivations are clearer, but
                    unfortunately, he remains a generic CGI punching bag for our
                    superheroes. His dynamic armor is packed with spikes, but
                    it's really one of those designs with visual impact only
                    since it has no effect whatsoever in battle. I can't get
                    into spoilers about Darkseid or DeSaad, but I can safely
                    write that these characters are nothing more than
                    fan-service, just like Joker (Jared Leto). The ending is
                    definitely the sequence that changes the most due to the
                    addition of dozens of new/extended action scenes, and it
                    does play out differently - though the conclusion is
                    essentially the same - leaving the viewers with a menacing
                    threat on the horizon. Zack Snyder's Justice League is
                    arguably a more cohesive, consistent, and emotionally
                    compelling movie than the 2017's version. As expected, its
                    four-hour runtime causes pacing issues and possesses dozens
                    of unnecessary, irrelevant scenes, but criticizing these
                    aspects in an admittedly non-theatrical cut is unfairly
                    defeating its purpose. Despite most of the original Justice
                    League being present in the Snyder Cut - something that
                    might surprise a few fans - the main narrative is built and
                    developed through a structure that flows tremendously better
                    than the previous edition. Cyborg becoming the emotional
                    core of the story and the increased character interactions
                    are some of the best changes Zack Snyder and Chris Terrio
                    did. The extended action sequences are more riveting, and
                    pre-existent footage is definitely improved, but the new VFX
                    are as erratic as Junkie XL's all-over-the-place score. The
                    R-rating is the only straight-up negative aspect that
                    damages the film with highly forced, fake-looking blood and
                    rare yet cringe-worthy cursing. Highly anticipated
                    characters and/or storylines are better described as
                    unimpactful fan-service, but overall, most of the decisions
                    made vastly improve upon what was already built. In the end,
                    I sincerely expect a significant majority of the fandom to
                    get their expectations fulfilled, and I hope that the DCEU
                    continues with Snyder involved - just as long as the studios
                    leave filmmakers to do their job without nonsensical
                    restrictions. Rating: B`;
  const testCreatedAt = '2021-03-18T21:16:00.330Z';
  const testUpdatedAt = '2021-03-18T21:16:00.330Z';

  return isLoading || movie.id !== +id ? (
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
          <Col className='h3 mb-3 font-weight-bold border-bottom border-success'>
            {movie.title}
          </Col>
          <Container>
            <MovieDetailsRow title='Budget' value={budget} />
            <MovieDetailsRow title='Genres' value={genres} />
            <MovieDetailsRow title='Production countries'>
              <ul className='m-0 p-0' style={{ listStyle: 'none' }}>
                {productionCountriesElements}
              </ul>
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
              {productionCompaniesElements}
            </Row>
          </Container>
        </Col>
      </Row>
      <hr className='divider' />
      <Row className='flex-column reviews'>
        <Col className='h4 mb-4 text-center font-weight-bold'>Reviews</Col>
        <Col>
          <Container className='pl-lg-5 pr-lg-5'>
            <MovieReview
              author={testAuthor}
              content={reviewTestContent}
              createdAt={testCreatedAt}
              updatedAt={testUpdatedAt}
              maxContentSymbolsToShow={900}
            />
            <MovieReview
              author={testAuthor}
              content={reviewTestContent}
              createdAt={testCreatedAt}
              updatedAt={testUpdatedAt}
              maxContentSymbolsToShow={900}
            />
            <MovieReview
              author={testAuthor}
              content={reviewTestContent}
              createdAt={testCreatedAt}
              updatedAt={testUpdatedAt}
              maxContentSymbolsToShow={900}
            />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
