import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head'; 

const inter = Inter({ subsets: ["latin"] });

export default function Media() {
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
    <main className={`min-h-screen flex flex-col items-center py-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Media</title></Head>
      <Navbar />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl">
      <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black"> Our Media</h1>
      <p className="text-center text-lg md:text-2xl font-semibold dark:text-dark-text text-[#828282]">
          FutureMD captured in some stunning photos!
        </p>
      </header>

    </main>
  );
}
