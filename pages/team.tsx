import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { HoverEffect } from "@/components/ui/card";
import {team} from '@/lib/team';
import {guest_speakers} from '@/lib/guest_speakers';
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import {Footer} from '@/components/footer';
import { Foot } from '@/components/foot';
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
    <main className={`min-h-screen flex-col items-center justify-between pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
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

      <p className="text-center mb-12 text-lg md:text-xl font-semibold dark:text-dark-text text-zinc-700 mb-20">
        Interested in joining our team?  <Link href='https://forms.gle/Sa52gmcHybHgnk438' target="_blank" className="dark:text-hov dark:hover:text-primary text-li hover:text-black transition delay-75">Click Here!</Link> 
      </p>

      <div id="guests" className="w-full bg-primary dark:bg-dprimary shadow hover:shadow-lg p-14">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black"> Our Guest Speakers</h1>
        <div className="max-w-5xl mx-auto px-8 justify-center items-center">
          <HoverEffect items={guest_speakers.map(speaker => ({ ...speaker, role: "" }))} />
        </div>
        <p className="text-center text-lg md:text-xl font-semibold dark:text-zinc-400 text-zinc-600">
          We are <u>always</u> looking for guest speakers! <br></br>if you're interested click the button below!
        </p>
        <div className="flex justify-center">
          <Link href='/contact'>
            <button className="mt-8 bg-navy dark:text-primary text-primary py-2 px-4 rounded border-2 border-transparent hover:border-hov dark:hover:border-li transition-colors duration-300 hover:bg-navy-dark ">Contact Us</button>
          </Link>
        </div>
      </div>
      <svg width="1916" height="230" viewBox="0 0 1916 230" fill="currentColor" className="mb-14 w-full h-auto text-primary dark:text-dprimary">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0C640 0 1280 0 1920 0C1920 27.3333 1920 54.6667 1920 82C1812.72 90.3729 1705.37 97.8729 1597.97 104.5C1461.49 112.233 1324.92 115.233 1188.28 113.5C1069.64 109.91 951.016 105.91 832.405 101.5C740.988 98.9498 649.56 97.9498 558.119 98.5C484.895 100.323 411.694 102.989 338.517 106.5C225.638 113.757 112.799 121.59 0 130C0 86.6667 0 43.3333 0 0Z"/>
      </svg>
      <Footer />
      <Foot />
    </main>
  );
}

