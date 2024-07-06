import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
      <Navbar />
      <header className="pt-8 pd-3 px-4 w-full max-w-9xl">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black"> About Us</h1>
        <p className="text-center mb-4 text-lg md:text-2xl font-semibold dark:text-dark-text text-[#828282]">
          Discover the Purpose & Passion Behind FutureMD!
        </p>
        </header>
    </main>
  );
}

