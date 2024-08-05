import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head'; 
import { Footer } from '@/components/footer';

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
    <main className={`min-h-screen flex flex-col pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - About</title></Head>
      <Navbar showAnimation={false} />

      <section className="w-full flex flex-col items-center">
        <div className="w-11/12 md:w-5/6 p-8 mt-4 dark:bg-[#000000] flex flex-col md:flex-row items-center justify-center mb-12">
          <div id="who-we-are" className="md:flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h2 className="text-6xl sm:text-6xl md:text-8xl font-bold dark:text-white text-black mb-4">Join Our <br/><span className="text-li dark:text-hov">Team</span></h2>
          </div>
          <div className=" w-4/3 sm:w-1/2 md:w-3/3 mt-8 md:mt-0">
            <img src='/guestspeakers.png' alt="Meta" />
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
