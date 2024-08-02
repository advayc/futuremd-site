import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function FirstEvent() {
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
    <main className={`min-h-screen pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700 flex flex-col items-center`}>
      <Head><title>FutureMD - First Event</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 px-4 w-full max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 dark:text-white text-black">Path2Med</h1>
        <p className="text-lg md:text-2xl font-semibold dark:text-dark-text text-zinc-600">Join us for an exciting event!</p>
      </header>
      <div>
        <button className="mt-8 dark:bg-navy dark:text-primary bg-primary text-navy py-2 px-4 rounded border-2 border-transparent hover:border-li transition-colors duration-300 hover:bg-navy-dark ">2024-11-23</button>
        <Link href="/events">
            <button className="ml-8 mt-8 dark:bg-navy dark:text-primary bg-primary text-navy py-2 px-4 rounded border-2 border-transparent hover:border-li transition-colors duration-300 hover:bg-navy-dark">Upcoming</button>
        </Link>
      </div>

      <section className="px-4 max-w-5xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col md:w-2/3">
          <p className="flex flex-col text-center items-center text-xl md:text-2xl font-semibold dark:text-white text-black mb-4">
            University of Toronto — Mississauga Library <br></br>William G. Davis Building
          </p>
          <p className="text-base md:text-lg font-bold dark:text-dark-text text-[#828282]">
          FutureMD is excited to announce our upcoming event, Path2Med, hosted at the prestigious University of Toronto! This dynamic gathering will showcase a lineup of distinguished guest speakers from the medical field, engaging workshops, and thrilling team challenges designed to inspire and educate. Attendees will enjoy complimentary catering from Lezzets, renowned as one of Mississauga's top shawarma destinations. In addition, we have lined up incredible prizes and exclusive custom merchandise that you won't want to miss! Mark your calendars for this unmissable event—it's an opportunity to connect, learn, and have fun!
          </p>
        </div>
        <div className="flex justify-end mt-8 md:mt-0">
          <Image
            alt="Event background"
            className="object-cover rounded-lg shadow-lg"
            src="/events/path2med.png"
            width={350} 
            height={350} 
          />
        </div>
      </section>

      <div className="flex flex-col items-center justify-center border-2 border-hov rounded-lg w-3/4 p-8 mt-12">
        <Link href="https://www.google.com/maps/place/3359+Mississauga+Rd,+Mississauga,+ON+L5L+1C6/@43.548151,-79.664585,17z/data=!4m6!3m5!1s0x882b43e2d0378c49:0xa2cefb17886b6fb3!8m2!3d43.5496084!4d-79.6620515!16s%2Fg%2F11gjs7tlhb?hl=en&entry=ttu" target="_blank"
        className="flex flex-col text-center items-center text-m md:text-m font-bold dark:hover:text-primary text-[#828282] hover:text-black dark:transition delay-75 transition delay-75 mb-4">
          University of Toronto Mississauga Library <br></br>1867 Inner Cir Rd, Mississauga, ON L5L 1C6
        </Link>

        <iframe
          className="md:w-[850px] md:h-[450px] h-[300px] border-2 border-gray-300 rounded-lg dark:invert dark:hue-rotate-180 "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.8014767055724!2d-79.66198!3d43.54818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b43e313b969a3%3A0x7b4f16d0f201bdb8!2sWilliam%20G.%20Davis%20Building!5e0!3m2!1sen!2sca!4v1722133988267!5m2!1sen!2sca"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </main>
  );
}
