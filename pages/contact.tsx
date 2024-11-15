import React, { useEffect } from 'react';
import { FaTiktok, FaGlobe } from 'react-icons/fa';
import Navbar from "@/components/navbar";
import ContactForm from "@/components/ContactForm";
import { useRouter } from "next/router";
import Head from 'next/head'; 
import { Footer } from '@/components/footer';


export default function Contact() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
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
    <main className={`min-h-screen flex flex-col items-center justify-between pt-8  dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Contact</title></Head>
      <Navbar showAnimation={false} />
      <div className="py-4 px-4 w-full max-w-9xl">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black">📩 Contact Us</h1>
        <p className="text-center mb-4 text-lg md:text-2xl font-bold dark:text-dark-text text-dark-text">
          If you have a question or business inquiry, <br />feel free to contact us here to get a quick response!
        </p>
        <ContactForm />
        <div className="flex flex-col items-center mt-20 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 dark:text-white text-black transform transition-transform duration-300 hover:scale-105">Our Social Media!</h2>
          <div className="flex flex-wrap justify-center gap-16 md:gap-40">
            <a href="mailto:contact.futuremd@gmail.com">
              <img src="/icons/gmail.png" alt="Email" className="w-16 md:w-24 transition-transform transform hover:scale-110 duration-300" />
            </a>
            <a href="https://www.instagram.com/futuremd_team/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.png" alt="Instagram" className="w-16 md:w-20 transition-transform transform hover:scale-110 duration-300" />
            </a>
            <a href="https://www.tiktok.com/@futuremd_team" target="_blank" rel="noopener noreferrer">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="w-14 md:w-[70px] dark:text-hov text-li transition-transform transform hover:scale-110 duration-300" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg>            </a>
            <a href="https://www.linkedin.com/company/futuremdteam/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.png" alt="LinkedIn" className="w-16 md:w-20 transition-transform transform hover:scale-110 duration-300" />
            </a>
            <a href="/" rel="noopener noreferrer">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="w-16 md:w-20 dark:text-blue-500 text-blue-600 transition-transform transform hover:scale-110 duration-300" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
