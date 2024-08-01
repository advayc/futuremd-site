import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head'; 
import { Footer } from '@/components/footer';
import Link from 'next/link';

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
    <main className={`min-h-screen items-center justify-between pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Events</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black"> Our Events</h1>
        <p className="text-center mb-4 text-lg md:text-2xl font-semibold dark:text-dark-text text-zinc-600">
          Check out some of our events we're hosting!
        </p>
      </header>
      
      <section className="px-4 max-w-9xl mx-auto ml-20 mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-black">
          Upcoming Events!
        </h1>
        <p className="text-lg md:text-xl font-semibold dark:text-dark-text text-[#828282]">
          Interested in learning more about our next event?  <Link href='/first' className="dark:text-hov dark:hover:text-primary text-li hover:text-navy transition delay-75">Click Here!</Link> 
        </p>

        <div className="flex justify-start mb-20">
          <a href='/path2med'>
          <Card className="bg-transparent dark:bg-dprimary border border-zinc-300 hover:border-zinc-400 dark:border-transparent dark:hover:border-zinc-300 dark:hover:border-zinc-800 transition-colors duration-300 max-w-md mx-4 rounded-lg p-2 mt-6">
            <CardHeader className="pb-0 pt-4 px-4 flex-col items-start text-center dark:text-white text-black">
              <h4 className="font-bold text-2xl dark:text-hov text-li">Path2Med</h4>
              <small className="dark:text-zinc-400 text-zinc-600 tracking-wide text-xl text-center font-bold sm:text-sm">November 23rd</small>
            </CardHeader>
            <CardBody className="overflow-visible py-4 px-4 pr-2">
              <Image
                alt="Event background"
                className="object-cover rounded-xl"
                src="/events/path2med.png"
                width={300}
                height={250}
              />
            </CardBody>
          </Card>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
