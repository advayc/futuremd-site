import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head'; 
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { HoverEffect } from "@/components/ui/card";
import { executives } from '@/lib/executives';


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
    <main className={`min-h-screen flex flex-col pt-8  dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - About</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mt-8 text-center dark:text-white text-black">💬 About Us</h1>
      </header>

      <section className="smallersect w-full flex flex-col items-center">
        <div className="mt-4 dark:bg-[#000000] flex flex-col md:flex-row items-center justify-center mb-12 w-full px-[77px]">
          <div id="who-we-are" className="md:flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-black mb-4">Who We Are..</h2>
            <p className="text-lg sm:text-xl md:text-2xl dark:text-dark-text text-dark-text font-semibold leading-relaxed md:leading-normal" style={{ maxWidth: '800px' }}>
            FutureMD is a registered non-profit organization under the Canadian
              Revenue Agency (CRA) and Ontario Business Registry (OBR). Led by a group
              of <span className="dark:text-hov text-li">ambitious & passionate</span> students 
              in the Mississauga and Peel area, FutureMD is committed to educating
              the youth & teens about how life really is during and after medical school!
            </p>
          </div>
          <div className=" md:w-[30%] w-2/3 sm:w-1/2 md:w-1/3 mt-8 md:mt-0">
            <img src='/logo.png' alt="Meta" className="logo" />
          </div>
        </div>
      </section>

      <div id="our-mission" className="w-full flex flex-col md:flex-row items-center justify-center bg-primary dark:bg-dprimary p-8 sm:p-16 md:p-24">
        <div className="smallersect md:w-1/2 text-center md:text-left transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold dark:text-white text-black mb-4">Our Mission is to <span className="dark:text-hov text-li">empower</span> youth</h2>
        </div>
        <div className="smallersect md:w-1/2 text-center md:text-left">
          <p className="ml-0 md:ml-12 text-lg sm:text-xl md:text-2xl dark:text-dark-text text-zinc-600 font-semibold leading-relaxed md:leading-normal" style={{ maxWidth: '600px', textAlign: 'center' }}>
            We strive to provide the youth with the necessary knowledge for the journey
            ahead of them. Ranging from tuition fees to challenges & obstacles in and
            after university, FutureMD allows our community in the Peel Region with
            the opportunity to connect and meet doctors, practicing physicians, and
            medical students to listen to their journey and advice throughout their
            medical career.
          </p>
        </div>
      </div>

      <svg width="1916" height="230" viewBox="0 0 1916 230" fill="currentColor" className="w-full h-auto text-primary dark:text-dprimary mt-[-2px] md:mt-[-70px] relative">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0C640 0 1280 0 1920 0C1920 27.3333 1920 54.6667 1920 82C1812.72 90.3729 1705.37 97.8729 1597.97 104.5C1461.49 112.233 1324.92 115.233 1188.28 113.5C1069.64 109.91 951.016 105.91 832.405 101.5C740.988 98.9498 649.56 97.9498 558.119 98.5C484.895 100.323 411.694 102.989 338.517 106.5C225.638 113.757 112.799 121.59 0 130C0 86.6667 0 43.3333 0 0Z" />
      </svg>

      <div id="our-executives" className="w-full text-center">
        <div className="w-full dark:border-li p-8 sm:p-16 mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold dark:text-white text-black mb-8">Meet Our Executives!</h2>
          <div className="max-w-5xl mx-auto px-4 sm:px-8 justify-center text-left">
            <HoverEffect items={executives}/>
          </div>
          <Link href='/team' className='justify-center'>
            <button className="font-semibold mt-6 px-8 py-4 bg-navy text-primary text-lg rounded transition-transform duration-700 transform hover:scale-105 dark:hover:bg-primary hover:bg-navy hover:text-primary dark:hover:text-navy hover:shadow-lg">Meet Our Team</button>
          </Link>
        </div>
      </div>

      <svg width="1916" height="230" viewBox="0 0 1916 230" fill="currentColor" className="rotate-180 w-full h-auto text-primary dark:text-dprimary -mt-18 relative top-[5px]">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0C640 0 1280 0 1920 0C1920 27.3333 1920 54.6667 1920 82C1812.72 90.3729 1705.37 97.8729 1597.97 104.5C1461.49 112.233 1324.92 115.233 1188.28 113.5C1069.64 109.91 951.016 105.91 832.405 101.5C740.988 98.9498 649.56 97.9498 558.119 98.5C484.895 100.323 411.694 102.989 338.517 106.5C225.638 113.757 112.799 121.59 0 130C0 86.6667 0 43.3333 0 0Z" />
      </svg>

      <div className="w-full flex flex-col md:flex-row items-center justify-center bg-primary dark:bg-dprimary shadow hover:shadow-lg px-8 sm:px-16 md:px-24 pt-10 pb-12 md:pb-28">
        <div id="who-we-are" className="md:flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left md:ml-10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold dark:text-white text-black">Join Us At Our <br className="hidden md:block" /> <span className="dark:text-hov text-li">Events</span></h2>
          <p className="text-lg sm:text-xl md:text-2xl dark:dark-text text-dark-text font-bold leading-9 mt-8 ">
            Click the button below to <br className="hidden md:block" /> learn more about our events!
          </p>
          <Link href='/events'>
            <button className="font-semibold mt-6 px-8 py-4 bg-navy text-primary text-lg rounded transition-transform duration-700 transform hover:scale-105 dark:hover:bg-primary hover:bg-navy hover:text-primary dark:hover:text-navy hover:shadow-lg">Learn More</button>
          </Link>
        </div>
        <div className=" md:w-[35%] w-2/3 sm:w-1/2 md:w-1/3 mt-8 md:mt-0 ">
          <img src='/events/path2medc.png' alt="Meta" className=" imghov" />
        </div>
      </div>
      <svg width="1916" height="230" viewBox="0 0 1916 230" fill="currentColor" className="w-full h-auto text-primary dark:text-dprimary mt-[-2px] md:mt-[-70px] relative">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0C640 0 1280 0 1920 0C1920 27.3333 1920 54.6667 1920 82C1812.72 90.3729 1705.37 97.8729 1597.97 104.5C1461.49 112.233 1324.92 115.233 1188.28 113.5C1069.64 109.91 951.016 105.91 832.405 101.5C740.988 98.9498 649.56 97.9498 558.119 98.5C484.895 100.323 411.694 102.989 338.517 106.5C225.638 113.757 112.799 121.59 0 130C0 86.6667 0 43.3333 0 0Z" />
      </svg>

      <div className="w-full flex flex-col md:flex-row items-center justify-center shadow hover:shadow-lg mt-22 px-8 sm:px-16 md:px-24 pt-10 pb-12 md:pb-28">
        <div id="who-we-are" className="md:flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left md:ml-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold dark:text-white text-black">Have More <br/>Questions?</h2>
          <p className="text-lg sm:text-xl md:text-2xl dark:dark-text text-dark-text font-bold leading-9 mt-8 ">
            Click the button below to <br className="hidden md:block" /> to visit our FAQ!!
          </p>
          <Link href='/faq'>
            <button className="font-semibold mt-6 px-8 py-4 bg-navy text-primary text-lg rounded transition-transform duration-700 transform hover:scale-105 dark:hover:bg-primary hover:bg-navy hover:text-primary dark:hover:text-navy hover:shadow-lg">Learn More</button>
          </Link>
        </div>
        <div className="md:w-[53%] w-2/3 scale-110 sm:w-1/2 md:w-1/3 mt-8 md:mt-0 ">
          <img src='/faq.png' alt="Meta" className="imghov" />
        </div>
      </div>

      <Footer />
    </main>
  );
}
