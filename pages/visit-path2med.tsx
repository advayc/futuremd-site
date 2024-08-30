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
