import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Inter } from 'next/font/google';


const Register = () => {
  const router = useRouter();
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light');
  const [isClient, setIsClient] = useState(false);

  // Retrieve theme from localStorage and apply on page load
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (storedTheme) {
      setSelectedTheme(storedTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(storedTheme);
    }
    setIsClient(true); // Set flag to true after client-side mount
  }, []);

  // Apply smooth transition on route change
  useEffect(() => {
    const handleRouteChange = (url: string) => {
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

  useEffect(() => {
    // Dynamically load the Fillout embed script on the client side to prevent hydration errors
    if (isClient) {
      const script = document.createElement('script');
      script.src = "https://server.fillout.com/embed/v1/";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isClient]);

  return (
    <main className={`min-h-screen flex flex-col items-center justify-between pt-8  dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head>
        <title>FutureMD - Register</title>
      </Head>
      <Navbar showAnimation={false} />
      <div className="py-4 px-4 w-full max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold my-4 text-center dark:text-white text-black">Register For Our Event!</h1>
        <p className="text-center mb-6 text-lg md:text-2xl font-bold dark:text-dark-text text-dark-text">Path2Med</p>
        <div className="mt-[-20px] mb-12">
          <br></br>
          {isClient && (
            <div style={{ width: '100%', height: '500px' }} data-fillout-id="aweXkgSnF6us" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Register;
