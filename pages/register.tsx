import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import { Footer } from '@/components/footer';
import Path2Medform from '../components/Path2Medform';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

const Register = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      document.documentElement.classList.add('transition-colors', 'duration-700');
      setTimeout(() => {
        document.documentElement.classList.remove('transition-colors', 'duration-700');
      }, 1700);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <main className={`min-h-screen flex flex-col items-center justify-between pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head>
        <title>FutureMD - Register</title>
      </Head>
      <Navbar showAnimation={false} />
      <div className="py-4 px-4 w-full max-w-6xl"> {/* Increased width to max-w-6xl */}
        <h1 className="text-4xl md:text-6xl font-bold my-4 text-center dark:text-white text-black">Register For Our Event!</h1>
        
        {/* Path2Med text */}
        <p className="text-center mb-6 text-lg md:text-2xl font-bold dark:text-dark-text text-dark-text">Path2Med</p>
        
        {/* Adjust form alignment and padding */}
        <div className="mt-[-20px] mb-12"> {/* Move form up by reducing margin */}
          <Path2Medform />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Register;
