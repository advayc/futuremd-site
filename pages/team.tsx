import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { HoverEffect } from "@/components/ui/card";
import {team} from '@/lib/team';
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import {Footer} from '@/components/footer';
import Link from "next/link";

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
    <main className={`min-h-screen flex-col items-center justify-between py-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Our Team</title></Head>
      <Navbar />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black"> Our Team</h1>
        <p className="text-center mb-1 text-lg md:text-2xl font-semibold dark:text-dark-text text-[#828282]">
          Discover The Team Behind FutureMD!  
        </p>
        </header>
        <div className="max-w-5xl mx-auto px-8 justify-center items-center">
             <HoverEffect items={team} />
        </div>
        <p className="text-center mb-4 text-lg md:text-xl font-semibold dark:text-dark-text text-zinc-700">
          Interested in joining our team?  <Link href='https://forms.gle/Sa52gmcHybHgnk438' target="_blank" className="dark:text-hov dark:hover:text-primary text-li hover:text-black transition delay-75">Click Here!</Link> 
        </p>
        <Footer />
    </main>
  );
}

