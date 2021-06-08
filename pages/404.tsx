import { NextPage } from 'next';

const Page404: NextPage = () => {
  return (
    <div className='vh-100 vw-100 d-flex flex-column justify-content-center align-items-center'>
      <h2 className='h2'>Not found</h2>
      <h2 className='h2'>404</h2>
    </div>
  );
};

export default Page404;
