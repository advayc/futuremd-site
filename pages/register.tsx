import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the external URL
    window.location.href = 'https://prettyform.addxt.com/a/form/?vf=1FAIpQLScWwzzH1xTNbF7eFDxpH_eq7AD1pt23aHhIHvaAmBLXMjvG_g';
  }, []);

  return null; 
};

export default Register;