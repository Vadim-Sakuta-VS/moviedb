import { Col, Container, Image, Row } from 'react-bootstrap';
import { DetailsPosterCol } from '../../src/components/MovieDetails/MovieDetails';
import { ApiMovies } from '../../src/api/apiMovies';
import { MovieDetailsRow } from '../../src/components/MovieDetails/MovieDetailsRow';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { withHeaderLayout } from '../../src/components/HOC/withHeaderLayout';
import { ApiCompanies } from '../../src/api/apiCompanies';
import { ICompany } from '../../src/types/entities';

type CompanyPageProps = {
  company: ICompany;
};

const CompanyPage: NextPage<CompanyPageProps> = ({ company }) => {
  const headquarters = company.headquarters || '---';
  const originCountry = company.origin_country || '---';
  const description = company.description || '---';
  const parentCompany =
    (company.parent_company && company.parent_company.name) || '---';

  return (
    <Container className='pt-2 pb-2'>
      <Row>
        <DetailsPosterCol>
          <Image
            src={`${ApiMovies.getImage(company.logo_path)}`}
            alt='Company poster'
            rounded
            className='w-100'
          />
        </DetailsPosterCol>
        <Col>
          <Col className='h3 mb-3 font-weight-bold border-bottom border-success'>
            {company.name}
          </Col>
          <Container>
            <MovieDetailsRow title='Headquarters' value={headquarters} />
            <MovieDetailsRow title='Origin Country' value={originCountry} />
            <MovieDetailsRow title='Description' value={description} />
            <MovieDetailsRow title='Parent Company' value={parentCompany} />
            {company.homepage && (
              <MovieDetailsRow>
                <a href={company.homepage} target='_blank' rel='noreferrer'>
                  Home page
                </a>
              </MovieDetailsRow>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const id = +String(params.id);
  if (isNaN(id) || (!isNaN(id) && id < 1)) {
    return {
      notFound: true,
    };
  }

  const company = await ApiCompanies.loadCompanyDetails(id);
  if (!company.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { company },
    revalidate: 60,
  };
};

export default withHeaderLayout(CompanyPage);
