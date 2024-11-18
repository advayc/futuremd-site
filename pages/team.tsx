import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Navbar from "@/components/navbar";
import { team } from '@/lib/team';
import { guest_speakers } from '@/lib/guest_speakers';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Footer } from '@/components/footer';
import Link from "next/link";
import { HoverEffect, Card, CardImage, CardRole, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTimes } from 'react-icons/fa';
import { cn } from "@/utils/cn";

export default function Team() {
  const router = useRouter();
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null);

  const closeModal = () => setSelectedSpeaker(null);

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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="min-h-screen flex-col items-center justify-between pt-8 dark:bg-dark-bg bg-light-bg transition-colors duration-700">
      <Head><title>FutureMD - Our Team</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 px-4 w-full max-w-9xl">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black"> Our Team</h1>
        <p className="text-center mb-1 text-lg md:text-2xl font-semibold dark:text-dark-text text-dark-text">
          Discover The Team Behind FutureMD!
        </p>
      </header>
      <div className="max-w-5xl mx-auto px-8 justify-center items-center">
        <HoverEffect items={team} />
      </div>

      <p className="text-center mb-12 text-lg md:text-xl font-semibold dark:text-dark-text text-zinc-700 mb-10">
        Interested in joining our team? <Link href='/apply' className="dark:text-hov dark:hover:text-primary text-li hover:text-black transition delay-75">Click Here!</Link>
      </p>

      <svg width="1916" height="230" viewBox="0 0 1916 230" fill="currentColor" className="rotate-180 w-full h-auto text-primary dark:text-dprimary">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0C640 0 1280 0 1920 0C1920 27.3333 1920 54.6667 1920 82C1812.72 90.3729 1705.37 97.8729 1597.97 104.5C1461.49 112.233 1324.92 115.233 1188.28 113.5C1069.64 109.91 951.016 105.91 832.405 101.5C740.988 98.9498 649.56 97.9498 558.119 98.5C484.895 100.323 411.694 102.989 338.517 106.5C225.638 113.757 112.799 121.59 0 130C0 86.6667 0 43.3333 0 0Z"/>
      </svg>

      <div id="guests" className="w-full bg-primary dark:bg-dprimary shadow hover:shadow-lg py-6">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-10 text-center dark:text-white text-black"> Our Guest Speakers</h1>
        <Carousel className="w-full max-w-5xl mx-auto px-8">
          <CarouselContent className="-ml-1">
            {guest_speakers.map((speaker, index) => (
              <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full" onClick={() => setSelectedSpeaker(speaker)}>
                  <Card className="imghov">
                    <CardImage src={speaker.image} alt={speaker.title} />
                    <CardTitle>{speaker.title}</CardTitle>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <p className="text-center text-lg md:text-xl font-semibold dark:text-zinc-400 text-zinc-600">
          We are <u>always</u> looking for guest speakers! <br />If you're interested, click the button below!
        </p>
        <div className="flex justify-center">
          <Link href='/contact'>
            <button className="font-semibold mt-8 px-4 py-2 bg-navy text-primary text-lg rounded transition-transform duration-700 transform hover:scale-105 dark:hover:bg-primary hover:bg-navy hover:text-primary dark:hover:text-navy hover:shadow-lg">Contact Us</button>
          </Link>
        </div>
      </div>

      <Footer />

      <AnimatePresence>
        {selectedSpeaker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
              className="relative dark:bg-black bg-white p-4 sm:p-8 rounded-2xl border border-white/[0.2] max-w-4xl mx-auto flex flex-col sm:flex-row"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex-none">
                <img src={selectedSpeaker.image} alt={selectedSpeaker.title} className="w-48 h-48 sm:w-56 sm:h-56 rounded-full mb-4" />
              </div>
              <div className="flex-auto pl-4 sm:pl-8">
                <button onClick={closeModal} className="absolute top-4 right-4 text-black hover:zinc-500 dark:text-white dark:hover:text-gray-400 transition">
                  <FaTimes size={20} />
                </button>
                <div className="flex flex-col items-start">
                  <h2 className="font-extrabold text-2xl sm:text-3xl text-black dark:text-white mb-2">{selectedSpeaker.title}</h2>
                  <p className="text-base sm:text-lg dark:text-zinc-400 font-bold text-zinc-600 mb-4">{selectedSpeaker.description}</p>
                  <div className="flex space-x-3">
                    {selectedSpeaker.linkedin && (
                      <Link href={selectedSpeaker.linkedin} target='_none' passHref>
                        <FaLinkedin className="dark:text-hov text-navy hover:text-hov dark:hover:text-primary transition" size={40} />
                      </Link>
                    )}
                    <Link href={selectedSpeaker.instagram} target='_none' passHref>
                      <FaInstagram className="dark:text-hov text-navy hover:text-hov dark:hover:text-primary transition" size={40} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
