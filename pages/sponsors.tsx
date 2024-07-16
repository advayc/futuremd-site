import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head';
import {sponsors} from '@/lib/sponsors';
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
      <Head><title>FutureMD - Sponsors</title></Head>
      <Navbar />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl">
        <h1 className="text-7xl font-bold my-8 mb-4 text-center dark:text-white text-black">Our Sponsors</h1>
        <p className="text-center mb-7 text-lg md:text-2xl font-semibold dark:text-dark-text text-[#828282]">
          Thank You to our AMAZING Sponsors! ❤️
        </p>
      </header>
      <section className="flex flex-col items-center">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="rounded-2xl p-4 overflow-hidden dark:bg-black border border-zinc-300 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-slate-600 relative z-20">
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.logo} alt={sponsor.name} width={sponsor.width} height={sponsor.height} className="mx-auto" />
              <p className="flex justify-center mt-4 text-lg md:text-2xl font-semibold dark:text-white text-black">
                {sponsor.name}
              </p>
            </a>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
