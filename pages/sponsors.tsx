import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head';
import { sponsors } from '@/lib/sponsors';
import { affiliates } from '@/lib/affiliates';
import { Footer } from '@/components/footer';
import { Foot } from '@/components/foot';
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

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
    <main className={`min-h-screen items-center justify-between py-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Sponsors</title></Head>
      <Navbar />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black"> Our Sponsors</h1>
        <p className="text-center mb-7 text-lg md:text-2xl font-semibold dark:text-dark-text text-[#828282]">
          Thank You to our AMAZING Sponsors! ❤️
        </p>
      </header>
      <section className="flex flex-wrap justify-center">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="rounded-2xl m-4 p-4 overflow-hidden dark:bg-black border border-zinc-300 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-slate-600 relative z-20 flex flex-col items-center justify-center text-center">
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
      <p className="text-center mt-10 text-lg md:text-xl font-semibold dark:text-dark-text text-zinc-700">
        Interested in sponsoring us? <Link href='/sponsorship' className="dark:text-hov dark:hover:text-primary text-li hover:text-black transition delay-75">Click Here!</Link>
      </p>
      <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black"> Our Affiliates</h1>
      <section className="flex flex-wrap justify-center">
        {affiliates.map((affiliate, index) => (
          <div key={index} className="rounded-2xl m-4 p-4 overflow-hidden dark:bg-black border border-zinc-300 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-slate-600 relative z-20 flex flex-col items-center justify-center text-center">
            <a href={affiliate.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
              <img src={affiliate.logo} alt={affiliate.name} width={affiliate.width} height={affiliate.height} className="mx-auto" />
              <p className="flex items-center justify-center mt-4 text-lg md:text-2xl font-semibold dark:text-white text-black">
                {affiliate.name}
              </p>
            </a>
          </div>
        ))}
      </section>
      <Footer />
      <Foot />
    </main>
  );
}
