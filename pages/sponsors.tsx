import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head';
import { sponsors } from '@/lib/sponsors';
import { affiliates } from '@/lib/affiliates';
import { Footer } from '@/components/footer';
import Link from 'next/link';


const getTierColor = (tier: string) => {
  switch (tier) {
    case 'bronze':
      return 'text-[#cd7f32] dark:text-[#e6a165]';
    case 'gold':
      return 'text-amber-500 dark:text-amber-400';
    case 'diamond':
      return 'text-li dark:text-cyan-400';
    default:
      return 'text-black dark:text-white';
  }
};

export default function About() {
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
    <main className={`min-h-screen items-center justify-between pt-8  dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Sponsors</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl">
        <h1 className="text-4xl md:text-7xl font-bold my-8 mb-4 text-center dark:text-white text-black"> Our Sponsors</h1>
        <p className="text-center mb-8 text-lg md:text-2xl font-semibold dark:text-dark-text text-dark-text">
          Thank You to our AMAZING Sponsors! ❤️
        </p>
      </header>
      <section className="flex flex-wrap justify-center">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="imghov rounded-2xl m-4 p-4 overflow-hidden dark:bg-black border border-zinc-300 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-slate-600 relative z-20 flex flex-col items-center justify-center text-center">
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
              <img src={sponsor.logo} alt={sponsor.name} width={sponsor.width} height={sponsor.height} className="mx-auto" />
              <p
                className={`flex justify-center mt-4 text-lg md:text-2xl font-semibold ${getTierColor(sponsor.tier)}`}
              >
                {sponsor.name}
              </p>
            </a>
          </div>
        ))}
      </section>
      <p className="text-center mt-10 text-lg md:text-xl font-semibold dark:text-dark-text text-zinc-700 mb-20">
        Interested in sponsoring us? <Link href='/sponsorship' className="dark:text-hov dark:hover:text-primary text-li hover:text-black transition delay-75">Click Here!</Link>
      </p>

      <svg width="1916" height="230" viewBox="0 0 1916 230" fill="currentColor" className="rotate-180 w-full h-auto text-primary dark:text-dprimary">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0C640 0 1280 0 1920 0C1920 27.3333 1920 54.6667 1920 82C1812.72 90.3729 1705.37 97.8729 1597.97 104.5C1461.49 112.233 1324.92 115.233 1188.28 113.5C1069.64 109.91 951.016 105.91 832.405 101.5C740.988 98.9498 649.56 97.9498 558.119 98.5C484.895 100.323 411.694 102.989 338.517 106.5C225.638 113.757 112.799 121.59 0 130C0 86.6667 0 43.3333 0 0Z"/>
      </svg>
      <div className="bg-primary dark:bg-dprimary pt-4 pb-5">
      <h2 className="text-4xl md:text-7xl font-bold my-8 mb-8 text-center dark:text-white text-black"> Our Affiliates</h2>
      <section className="flex flex-wrap justify-center pb-12">
        {affiliates.map((affiliate, index) => (
          <div key={index} className="imghov rounded-2xl m-4 p-4 overflow-hidden dark:bg-black border border-zinc-300 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-slate-600 relative z-20 flex flex-col items-center justify-center text-center">
            <a href={affiliate.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
              <img src={affiliate.logo} alt={affiliate.name} width={affiliate.width} height={affiliate.height} className="mx-auto" />
              <p className="flex items-center justify-center mt-4 text-lg md:text-2xl font-semibold dark:text-white text-black text-center">
                {affiliate.name}
                {affiliate.subName && <><br />{affiliate.subName}</>}
              </p>
            </a>
          </div>
        ))}
      </section>
      </div>
      <Footer />
    </main>
  );
}
