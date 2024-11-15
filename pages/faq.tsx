import React from "react";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head'; 
import { Footer } from '@/components/footer';
import Tabs from '@/components/ui/accordian';


export default function Events() {
  const router = useRouter();

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

  return (
    <main className={`min-h-screen items-center justify-between pt-8  dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - FAQ</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 px-4 w-full max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mt-8 mb-1 text-center dark:text-white text-black">
          Frequently Asked Questions
        </h1>
        <h2 className="text-center text-lg md:text-xl font-semibold dark:text-dark-text text-dark-text mb-8 ">
          Learn More About FutureMD!
        </h2>
      </header>
      <div className="w-full max-w-4xl mx-auto px-4 mb-16">
        <Tabs />
      </div>
      <Footer />
    </main>
  );
}

