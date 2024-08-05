import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head'; 
import Image from "next/image";
import Zoom from 'react-medium-image-zoom';
import Link from 'next/link';
import 'react-medium-image-zoom/dist/styles.css';
import { Footer } from '@/components/footer';
const inter = Inter({ subsets: ["latin"] });

const images = [
  { src: '/instagram/1.jpg', link: 'https://www.instagram.com/p/C9YGo8gheCm/?img_index=1' },
  { src: '/instagram/2.jpg', link: 'https://www.instagram.com/p/C9YGo8gheCm/?img_index=1' },
  { src: '/instagram/3.jpg', link: 'https://www.instagram.com/p/C9YGo8gheCm/?img_index=1' },
];

const galleryImages = [
  { src: '/gallary/first.jpg' },
  { src: '/gallary/second.jpg' },
  { src: '/gallary/third.jpg' },
];

export default function Media() {
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
    <main className={`min-h-screen flex flex-col items-center pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Media</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 px-4 w-full max-w-9xl">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black"> Our Media</h1>
        <p className="text-center text-lg md:text-2xl font-semibold dark:text-dark-text text-[#828282]">
          FutureMD captured in some stunning photos!
        </p>
      </header>

      <h1 className="text-1xl md:text-3xl font-bold my-8 mb-4 text-center dark:text-white text-black"> Check out our 
      <Link href='https://www.instagram.com/futuremd_team' target="_blank" className="dark:text-white dark:hover:text-hov text-black hover:text-li transition delay-75"> Instagram Page!
        </Link></h1> 

      <section className="flex justify-around py-5 space-x-5">
        {images.map((image, index) => (
          <a key={index} href={image.link} target="_blank" rel="noopener noreferrer" className="block w-1/3 hover:scale-105 transition-transform duration-500">
            <Image
              src={image.src}
              alt={`Instagram post ${index + 1}`}
              width={450}
              height={450}
              className="h-auto object-cover rounded-lg"
            />
          </a>
        ))}
      </section>

      <section id="gal" className="max-w-9xl py-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center dark:text-white text-black">Gallery Showcase!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden">
              <Zoom>
                <Image
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  width={400} 
                  height={250}
                  className="h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Zoom>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
