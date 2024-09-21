import React from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head'; 
import { Footer } from '@/components/footer';


const inter = Inter({ subsets: ["latin"] });

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
    <main className={`min-h-screen flex flex-col justify-center pt-8 pb-20 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Newsletter</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 px-2 w-full max-w-5xl mx-auto">
        <div className="md:flex items-start justify-between mb-20">
          <div className="md:w-2/5 mt-16"> 
            <h1 className="text-2xl md:text-4xl font-bold mt-16 mb-5 dark:text-white text-black whitespace-nowrap text-left">
              Subscribe To The <span className="dark:text-hov text-li">Newsletter</span>
            </h1>
            <p className="text-left text-md md:text-lg font-semibold dark:text-dark-text text-[#828282] mb-8">
              Receive monthly updates on <span className="dark:text-hov text-li">FutureMD</span> & our events!
            </p>
            <form className="flex justify-start mb-16">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 border border-gray-300 rounded-lg w-full md:w-auto"
              />
              <button
                type="submit"
                className="ml-2 p-2 bg-[#2E3B85] text-[#E4EBFF] rounded-lg hover:bg-[#243171] transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
          <img src="/newsletter.png" alt="Newsletter" className="w-80 md:w-2/3 h-auto" /> 
        </div>
      </header>
      <Footer />
    </main>
  );
  
}

