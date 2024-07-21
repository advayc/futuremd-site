import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head'; 
import {Footer} from '@/components/footer';

const inter = Inter({ subsets: ["latin"] });

export default function About() {
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
    <main className={`min-h-screen items-center justify-between py-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Schedule</title></Head>
      <Navbar />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl">
      <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black"> Our Schedule</h1>
      <p className="text-center mb-4 text-lg md:text-2xl font-semibold dark:text-dark-text text-[#828282]">
          Join The Passionate Team Behind FutureMD!
        </p>
        </header>
        <Footer />
    </main>
  );
}

