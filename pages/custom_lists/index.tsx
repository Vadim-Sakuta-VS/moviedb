import { withHeaderLayout } from '../../src/components/HOC/withHeaderLayout';
import UserListsCustomPage from '../../src/components/UserListsCustomPage/UserListsCustomPage';
import withAuth from '../../src/components/HOC/withAuth';

export default withAuth(withHeaderLayout(UserListsCustomPage));
