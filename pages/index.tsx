import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { CiCircleChevDown } from "react-icons/ci";
import { Footer } from "@/components/footer";
import { useEffect, useRef, ReactElement } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const fadeRefs = useRef<HTMLDivElement[]>([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      fadeRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleScroll = () => {
    const element = document.getElementById("what-does");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={`flex flex-col items-center justify-center pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD</title></Head>
      <Navbar showAnimation={true} />
      <div ref={(el) => { if (el) fadeRefs.current[0] = el; }} className="f2 mt-16 flex-grow flex flex-col items-center justify-center text-center px-4 md:px-8 w-full h-[calc(100vh-9rem)]">
        <h1 className="font-black dark:text-hov text-[#3C55B7] text-6xl sm:text-7xl md:text-8xl">
          FutureMD{" "}
          <span className="dark:text-white text-black">Inc.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-3xl font-semibold mt-3 md:mt-6 dark:text-dark-text text-zinc-500">
          A youth-led nonprofit organization with the mission to educate <br className="hidden md:block" /> teens about life during and after medical school!
        </p>
        <button onClick={handleScroll}>
          <CiCircleChevDown className="text-5xl text-zinc-500 hover:text-li dark:hover:text-hov mt-20 sm:mt-40" />
        </button>
      </div>

      <div ref={(el) => { if (el) fadeRefs.current[1] = el; }} className="fade-in">
        <div className="w-full flex flex-col items-center dark:bg-dprimary bg-primary pt-16 pb-12" id="what-does">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 dark:text-white text-center">
            What <span className="dark:text-hov text-li">FutureMD</span> Does.
          </h2>
          <p className="mb-12 px-4 text-lg sm:text-xl md:text-2xl text-center max-w-2xl text-dark-text font-semibold">
            At FutureMD, we focus on four main aspects to educate students about medlife.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">

            <a href="/events" className="flex flex-col items-center mb-8 imghov">
              <div className="w-full max-w-xs h-40 overflow-hidden">
                <img src="/events/path2med.png" alt="Events & Conferences" className="object-cover w-full h-full" />
              </div>
              <p className="text-lg font-bold rounded-b-3xl text-white bg-li dark:bg-navy w-full max-w-xs h-32 px-4 py-2 hover:drop-shadow-2xl">1. Events & Conferences</p>
            </a>

            <a href="/team#guests" className="flex flex-col items-center mb-8 imghov">
              <div className="w-full max-w-xs h-40 overflow-hidden">
                <img src="/apply.png" alt="Guest Speakers" className="object-cover w-full h-full" />
              </div>
              <p className="text-lg font-bold rounded-b-3xl text-white bg-li dark:bg-navy w-full max-w-xs h-32 px-4 py-2 hover:drop-shadow-2xl">2. Guest Speakers</p>
            </a>

            <a href="https://www.instagram.com/p/C9YGo8gheCm/?img_index=1" target="_blank" className="flex flex-col items-center mb-8 imghov">
              <div className="w-full max-w-xs h-40 overflow-hidden">
                <img src="/instagram/3.jpg" alt="Fairs & Fests" className="object-cover w-full h-full" />
              </div>
              <p className="text-lg font-bold rounded-b-3xl text-white bg-li dark:bg-navy w-full max-w-xs h-32 px-4 py-2 hover:drop-shadow-2xl">3. Learning Opportunities</p>
            </a>

            <a href="/media#gal" className="flex flex-col items-center mb-8 imghov">
              <div className="w-full max-w-xs h-40 overflow-hidden">
                <img src="/activitiesv2.png" alt="Activities" className="object-cover w-full h-full" />
              </div>
              <p className="text-lg font-bold rounded-b-3xl text-white bg-li dark:bg-navy w-full max-w-xs h-32 px-4 py-2 hover:drop-shadow-2xl">4. Activities</p>
            </a>
            
          </div>
        </div>
      
      <svg width="1916" height="230" viewBox="0 0 1916 230" fill="currentColor" className="w-full h-auto text-primary dark:text-dprimary">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0C640 0 1280 0 1920 0C1920 27.3333 1920 54.6667 1920 82C1812.72 90.3729 1705.37 97.8729 1597.97 104.5C1461.49 112.233 1324.92 115.233 1188.28 113.5C1069.64 109.91 951.016 105.91 832.405 101.5C740.988 98.9498 649.56 97.9498 558.119 98.5C484.895 100.323 411.694 102.989 338.517 106.5C225.638 113.757 112.799 121.59 0 130C0 86.6667 0 43.3333 0 0Z" />
      </svg>
    </div>

      <div ref={(el) => { if (el) fadeRefs.current[2] = el; }} className="fade-in w-[75%] flex flex-col items-center py-20" id="vision">
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          <div className="md:w-1/2 text-center md:text-left flex justify-center md:justify-start">
            <h2 className="text-7xl font-bold dark:text-white text-black mb-4">Our <span className="dark:text-hov text-li">Vision</span></h2>
          </div>
          <div className="text-lg sm:text-xl md:text-2xl text-center md:text-left max-w-2xl text-dark-text font-semibold md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-start">
            <div className="text-center leading-relaxed md:leading-normal">
              <p>
                “FutureMD aims to provide teenagers across the Peel-Mississauga community with insights into a future in the medical sector. We strive to inspire and prepare the youth to reach their fullest potential, preparing them for the long journey ahead of them.” <br />
              </p>
              <p className="font-bold dark:text-hov text-navy mt-2">- Bobby F. | Founder</p>
            </div>
          </div>
        </div>
      </div>

      <svg width="1916" height="230" viewBox="0 0 1916 230" fill="currentColor" className="rotate-180 w-full h-auto text-primary dark:text-dprimary">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0C640 0 1280 0 1920 0C1920 27.3333 1920 54.6667 1920 82C1812.72 90.3729 1705.37 97.8729 1597.97 104.5C1461.49 112.233 1324.92 115.233 1188.28 113.5C1069.64 109.91 951.016 105.91 832.405 101.5C740.988 98.9498 649.56 97.9498 558.119 98.5C484.895 100.323 411.694 102.989 338.517 106.5C225.638 113.757 112.799 121.59 0 130C0 86.6667 0 43.3333 0 0Z"/>
      </svg>
        <div className="w-full flex flex-col md:flex-row items-center justify-center bg-primary dark:bg-dprimary shadow hover:shadow-lg px-8 sm:px-16 md:px-36 pt-10 pb-12 md:pb-28">
          <div ref={(el) => { if (el) fadeRefs.current[3] = el; }}  className="md:flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left md:ml-10">
          <h2 className="dark:text-white text-4xl sm:text-5xl md:text-7xl font-bold mb-2">About Us</h2>
              <h3 className="text-lg md:text-2xl text-navy dark:text-hov mb-4 font-semibold">Learn More About Us...</h3>
              <p className="text-lg md:text-2xl mb-4 text-[#6F7782] font-semibold leading-9">
                "FutureMD aims to provide teenagers across our <br className="hidden md:block" /> community with insights into a future in <br className="hidden md:block" /> the medical sector."
              </p>
              <a href="/about" className="font-semibold px-8 py-4 bg-navy text-primary text-lg rounded transition-transform duration-700 transform hover:scale-105 dark:hover:bg-primary hover:bg-navy hover:text-primary dark:hover:text-navy hover:shadow-lg">Learn More</a>
          </div>
          <div className=" md:w-[45%] w-2/3 sm:w-1/2 md:w-1/3 mt-8 md:mt-0 ">
            <img src='/abt.png' alt="Meta" className=" imghov" />
          </div>
        </div>
      <Footer />
    </main>
  );
}
