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
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScWwzzH1xTNbF7eFDxpH_eq7AD1pt23aHhIHvaAmBLXMjvG_g/viewform';
  }, []);

  return null; 
};

export default Register;
