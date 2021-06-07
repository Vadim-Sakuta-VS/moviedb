import { withHeaderLayout } from '../../src/components/HOC/withHeaderLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { BASIC_LISTS_TYPES } from '../../src/components/UserListsPage/UserListsPage';
import UserListsPage from '../../src/components/UserListsPage/UserListsPage';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(BASIC_LISTS_TYPES).map((key) => ({
    params: { type: key.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default withHeaderLayout(UserListsPage);
