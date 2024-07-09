import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Head from 'next/head'; // Import Head from next/head
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Function to apply the theme
    const applyTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      const themeClass = savedTheme === 'dark' ? 'dark' : 'light';
      document.documentElement.classList.add(themeClass);
    };

    // Apply the theme as soon as the app loads
    applyTheme();
  }, []);

  return (
    <>
      <Head>
        <title>FutureMD</title> 
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;