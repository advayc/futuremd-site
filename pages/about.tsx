import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head'; 
import { Footer } from '@/components/footer';
import Link from 'next/link';

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
    <main className={`min-h-screen flex flex-col py-10 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - About</title></Head>
      <Navbar />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl">
        <h1 className="text-7xl font-bold mt-8 text-center dark:text-white text-black">💬 About Us</h1>
      </header>

      <section className="w-full flex flex-col items-center">
        <div className="w-11/12 md:w-5/6 p-8 mt-4 dark:bg-[#000000] flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="md:flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h2 className="text-7xl font-bold dark:text-white text-black mb-4">Who We Are..</h2>
            <p className="text-lg dark:text-zinc-400 text-[#828282] font-bold leading-9">
              FutureMD is a registered non-profit organization under the Ontario
              Business Registry. Led by a group of ambitious & passionate students
              located in the Mississauga-GTA area, FutureMD is committed to educating
              the youth & teens about how life really is during and after medical school!
            </p>
          </div>
          <div className="md:w-[30%] mb-4 md:mb-0">
            <img src='/logo.png' alt="Meta" />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center bg-primary dark:bg-[#0c0c0c] shadow hover:shadow-lg p-24">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-7xl font-bold dark:text-white text-black mb-4">Our Mission is to empower youth</h2>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="ml-0 md:ml-12 text-lg dark:text-dark-text text-navy font-bold leading-9">
              We strive to provide the youth with the necessary knowledge for the journey
              ahead of them, ranging from tuition fees, to challenges & obstacles in and
              after university. We do so by allowing our community in the Peel Region with
              the opportunity to connect and meet doctors, practicing physicians, and
              medical students to listen to their journey and advice throughout their
              medical career.
            </p>
          </div>
        </div>
        
        <div className="w-full text-center mt-28">
          <div className="w-full dark:border-li p-16 mx-auto">
            <h2 className="text-7xl font-bold dark:text-white text-black mb-8">Meet Our Team!</h2>
            <p className="text-lg font-bold italic dark:text-dark-text text-[#828282] mb-10">
              “FutureMD aims to provide teenagers across our community with insights into a future in the medical sector. We see ourselves making a difference by pushing the youth to the best of their abilities to prepare them for the long journey ahead of them.”
            </p>
            <a href="/team" className="bg-navy text-white py-2 px-4 rounded border-2 border-transparent hover:border-li transition-colors duration-300 hover:bg-navy-dark ">Meet Our Team</a>
        
        <p className="text-center mt-11 text-lg md:text-xl font-semibold dark:text-dark-text text-zinc-700">
          Interested in joining our team?  <Link href='https://forms.gle/Sa52gmcHybHgnk438' target="_blank" className="dark:text-hov dark:hover:text-primary text-li hover:text-black transition delay-75">Click Here!</Link> 
        </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
