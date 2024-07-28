import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { CiCircleChevDown } from "react-icons/ci";
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
    <main className={`flex flex-col items-center justify-center  pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD</title></Head>
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 md:px-8 w-full h-[calc(100vh-9rem)]">
        <h1 className="font-black dark:text-hov text-[#3C55B7] text-7xl md:text-8xl">
          FutureMD{" "}
          <span className="dark:text-white text-black">Inc</span>
        </h1>
        <p className="text-lg md:text-3xl font-bold mt-3 md:mt-6 dark:text-dark-text text-zinc-500">
          A student-led nonprofit organization with the goal to educate <br /> teens about life during and after medical school!
        </p>
        <Footer />
        <CiCircleChevDown className="text-4xl text-zinc-500"/>
      </div>
      
      <div className="w-full flex flex-col items-center dark:bg-dprimary bg-primary pt-16">
        <h2 className="text-7xl font-bold mb-4 dark:text-white">What FutureMD Does.</h2>
        <p className="mb-12 px-4 text-2xl text-center max-w-2xl text-[#828282] font-bold">
          At FutureMD, we focus on four main aspects to educate students about medlife.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full px-4 md:px-16">
          <div className="flex flex-col items-center">
            <div className="w-80 h-48 overflow-hidden">
              <img src="/placeholder.png" alt="Workshops" className="object-cover w-full h-full" />
            </div>
            <p className="text-xl font-bold rounded-b-3xl text-white bg-li dark:bg-navy w-80 h-40 px-8 py-4 hover:drop-shadow-2xl">1. Host workshops</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-80 h-48 overflow-hidden">
              <img src="/placeholder.png" alt="Activities" className="object-cover w-full h-full" />
            </div>
            <p className="text-xl font-bold rounded-b-3xl text-white bg-li dark:bg-navy w-80 h-40 px-8 py-4 hover:drop-shadow-2xl">2. Activities</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-80 h-48 overflow-hidden">
              <img src="/events/path2med.png" alt="Events & Conferences" className="object-cover w-full h-full" />
            </div>
            <a className="text-xl font-bold rounded-b-3xl text-white bg-li dark:bg-navy w-80 h-40 px-8 py-4 hover:drop-shadow-2xl" href="/events">3. Events & Conferences</a>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-80 h-48 overflow-hidden">
              <img src="/placeholder.png" alt="Fairs & Fests" className="object-cover w-full h-full" />
            </div>
            <p className="text-xl font-bold rounded-b-3xl text-white bg-li dark:bg-navy w-80 h-40 px-8 py-4 hover:drop-shadow-2xl">4. Learning Opportunities</p>
          </div>
        </div>
      </div>
      <svg width="1916" height="230" viewBox="0 0 1916 230" fill="currentColor" className="w-full h-auto text-primary dark:text-dprimary">
        <path d="M0.134048 0V103.702V130.328C0.135942 134.063 -0.69468 139.065 1.75652 142.355C4.81638 146.461 12.6201 147.963 17.4989 149.663C32.3385 154.836 47.7946 159.023 63.2789 162.378C127.498 176.294 196.238 180.484 262.185 177.921C537.487 167.218 800.338 47.8109 1078.33 71.7084C1230.22 84.7652 1365.15 153.51 1507.72 195.696C1588.92 219.722 1674.62 234.124 1760.3 228.55C1789.34 226.659 1817.69 222.066 1845.54 214.376C1863.71 209.358 1880.7 202.019 1897.64 194.444C1903.97 191.614 1914.13 188.322 1918.11 182.839C1920.97 178.924 1919.74 172.597 1919.74 168.166V133.131V0H0.134048Z"/>
      </svg>

      <div className="w-full flex flex-col py-12 mb-12 w-full max-w-6xl mt-20">
        <h2 className="text-7xl font-bold mb-14 dark:text-white">Who we are..</h2>
        <div className="flex flex-col md:flex-row items-center w-full px-4 ">
          <img src="/team/bobby.jpg" alt="Bobby | Founder" className="md:w-[30%] mb-8 md:mb-0 md:mr-8" />
          <div className="text-2xl text-center md:text-left max-w-2xl text-[#828282] font-bold">
            “FutureMD aims to provide teenagers across our community with insights into a future in the medical sector. We see ourselves making a difference by pushing the youth to the best of their abilities to prepare them for the long journey ahead of them.” <br />
            <p className="font-bold dark:text-hov text-navy mt-2">- Bobby | Founder</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center dark:bg-dprimary bg-primary pt-12">
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

    </main>
  );
}
