import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
    <main className={`w-screen h-screen flex flex-col items-center justify-between p-0 md:p-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD</title></Head>
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 md:px-8 w-full">
        <h1 className="font-black dark:text-hov text-[#3C55B7] text-7xl md:text-8xl">
          FutureMD{" "}
          <span className="dark:text-white text-black">Inc</span>
        </h1>
        <p className="text-lg md:text-3xl font-bold mt-4 md:mt-8 dark:text-dark-text text-zinc-500">
          A student-led nonprofit organization with the goal to educate <br /> teens about life during and after medical school!
        </p>
      </div>
      <Footer />
    </main>
  );
}
