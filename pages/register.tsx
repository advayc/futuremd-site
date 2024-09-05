import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();
  <>
    <head>
      <title>FutureMD</title>
    </head>
    <h1 className="text-transparent">Register For Our Event!</h1>
  </>

  useEffect(() => {
    // Redirect to the external URL
    window.location.href = 'https://forms.gle/dA9Yoxah2E3nrqzf6';
  }, []);

  return null; 
};

export default Register;
