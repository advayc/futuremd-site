import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import '@/styles/globals.css';
import '@/styles/zoom.css';
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from 'next/font/google';

// Import the Inter font with specific weights
const inter = Inter({
  subsets: ['latin'],
  weight: ['800', '500', '600']
});

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
        />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}

export default MyApp;
