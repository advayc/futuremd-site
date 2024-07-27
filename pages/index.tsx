import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { CiCircleChevDown } from "react-icons/ci";
import { Foot } from "@/components/foot";
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
    <main className={`flex flex-col items-center justify-center pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD</title></Head>
      <Navbar />
      <div className="mt-16 flex-grow flex flex-col items-center justify-center text-center px-4 md:px-8 w-full h-[calc(100vh-9rem)]">
        <h1 className="font-black dark:text-hov text-[#3C55B7] text-7xl md:text-8xl">
          FutureMD{" "}
          <span className="dark:text-white text-black">Inc</span>
        </h1>
        <p className="text-lg md:text-3xl font-bold mt-3 md:mt-6 dark:text-dark-text text-zinc-500">
          A student-led nonprofit organization with the goal to educate <br /> teens about life during and after medical school!
        </p>
        <a href="#what-does">
          <CiCircleChevDown className="text-5xl text-zinc-500 hover:text-li dark:hover:text-hov mt-40" />
        </a>
      </div>
      
      <div id="what-does" className="w-full flex flex-col items-center dark:bg-dprimary bg-primary pt-16 pb-12">
        <h2 className="text-7xl font-bold mb-4 dark:text-white">What FutureMD Does.</h2>
        <p className="mb-12 px-4 text-2xl text-center max-w-2xl text-[#828282] font-bold">
          At FutureMD, we focus on four main aspects to educate students about medlife.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full px-4 md:px-48">
          <div className="flex flex-col items-center mb-4">
            <div className="w-64 h-40 overflow-hidden">
              <img src="/placeholder.png" alt="Workshops" className="object-cover w-full h-full" />
            </div>
            <p className="text-lg font-bold rounded-b-3xl text-white bg-li dark:bg-navy w-64 h-32 px-4 py-2 hover:drop-shadow-2xl">1. Host workshops</p>
          </div>
          <div className="flex flex-col items-center mb-4">
            <div className="w-64 h-40 overflow-hidden">
              <img src="/placeholder.png" alt="Activities" className="object-cover w-full h-full" />
            </div>
            <p className="text-lg font-bold rounded-b-3xl text-white bg-li dark:bg-navy w-64 h-32 px-4 py-2 hover:drop-shadow-2xl">2. Activities</p>
          </div>
          <div className="flex flex-col items-center mb-4">
            <div className="w-64 h-40 overflow-hidden">
              <img src="/events/path2med.png" alt="Events & Conferences" className="object-cover w-full h-full" />
            </div>
            <a className="text-lg font-bold rounded-b-3xl text-white bg-li dark:bg-navy w-64 h-32 px-4 py-2 hover:drop-shadow-2xl" href="/events">3. Events & Conferences</a>
          </div>
          <div className="flex flex-col items-center mb-4">
            <div className="w-64 h-40 overflow-hidden">
              <a href="https://www.instagram.com/p/C9YGo8gheCm/?img_index=1" target="_blank">
              <img src="/instagram/1.jpg" alt="Fairs & Fests" className="object-cover w-full h-full" />
              </a>
            </div>
            <p className="text-lg font-bold rounded-b-3xl text-white bg-li dark:bg-navy w-64 h-32 px-4 py-2 hover:drop-shadow-2xl">4. Learning Opportunities</p>
          </div>
        </div>
      </div>
      <svg width="1916" height="230" viewBox="0 0 1916 230" fill="currentColor" className="w-full h-auto text-primary dark:text-dprimary">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0C640 0 1280 0 1920 0C1920 27.3333 1920 54.6667 1920 82C1812.72 90.3729 1705.37 97.8729 1597.97 104.5C1461.49 112.233 1324.92 115.233 1188.28 113.5C1069.64 109.91 951.016 105.91 832.405 101.5C740.988 98.9498 649.56 97.9498 558.119 98.5C484.895 100.323 411.694 102.989 338.517 106.5C225.638 113.757 112.799 121.59 0 130C0 86.6667 0 43.3333 0 0Z" />
      </svg>

      <div id="who-are" className="w-full flex flex-col py-12 mb-12 w-full max-w-6xl mt-10">
        <h2 className="text-7xl font-bold mb-14 dark:text-white">Who we are..</h2>
        <div className="flex flex-col md:flex-row items-center w-full px-4 ">
          <img src="/team/bobby.jpg" alt="Bobby | Founder" className="md:w-[30%] mb-8 md:mb-0 md:mr-8" />
          <div className="text-2xl text-center md:text-left max-w-2xl text-[#828282] font-bold">
            “FutureMD aims to provide teenagers across our community with insights into a future in the medical sector. We see ourselves making a difference by pushing the youth to the best of their abilities to prepare them for the long journey ahead of them.” <br />
            <p className="font-bold dark:text-hov text-navy mt-2">- Bobby | Founder</p>
          </div>
        </div>
      </div>

      <div id="abt" className="w-full flex flex-col items-center dark:bg-dprimary bg-primary pt-12 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-start ">
            <h2 className="dark:text-white text-7xl font-bold mb-2">About Us</h2>
            <h3 className="text-2xl text-navy dark:text-hov mb-4 font-semibold">Learn More About Us...</h3>
            <p className="text-2xl mb-8 text-[#6F7782] font-bold leading-9">
              “FutureMD aims to provide teenagers across our <br /> community with insights into a future in <br /> the medical sector.”
            </p>
            <a href="/about" className="px-4 py-2 bg-navy text-primary text-lg rounded transition-transform duration-700 transform hover:scale-105 dark:hover:bg-primary hover:bg-navy hover:text-primary dark:hover:text-navy hover:shadow-lg">Learn More</a>
          </div>
          <img src="/logo.png" alt="FutureMD Logo" className="md:w-[35%] mt-8 md:mt-0" />
        </div>
      </div>
      <Foot />
    </main>
  );
}
