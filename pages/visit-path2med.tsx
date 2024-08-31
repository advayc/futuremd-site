import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/register',
      permanent: false,
    },
  };
};

const VisitPath2Med = () => {
  return null;
};

export default VisitPath2Med;
// this page can be temporary then removed later
