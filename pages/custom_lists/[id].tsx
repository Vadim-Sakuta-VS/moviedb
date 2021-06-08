import UserListCustomDetailsPage from '../../src/components/UserListCustomDetailsPage/UserListCustomDetailsPage';
import { withHeaderLayout } from '../../src/components/HOC/withHeaderLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import withAuth from '../../src/components/HOC/withAuth';
import { isPositiveNumberId } from '../../src/utils/utils';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const id = +String(params.id);
  if (!isPositiveNumberId(id)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

export default withAuth(withHeaderLayout(UserListCustomDetailsPage));
