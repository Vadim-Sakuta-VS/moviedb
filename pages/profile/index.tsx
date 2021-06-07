import { withHeaderLayout } from '../../src/components/HOC/withHeaderLayout';
import ProfilePage from '../../src/components/ProfilePage/ProfilePage';
import withAuth from '../../src/components/HOC/withAuth';

export default withAuth(withHeaderLayout(ProfilePage));
