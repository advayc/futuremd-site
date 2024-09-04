import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { Key, useEffect } from "react";
import Head from 'next/head'; 
import Image from "next/image";
import Zoom from 'react-medium-image-zoom';
import Link from 'next/link';
import 'react-medium-image-zoom/dist/styles.css';
import { Footer } from '@/components/footer';
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const inter = Inter({ subsets: ["latin"] });

const galleryImages = [
  { src: '/gallery/first.jpg' },
  { src: '/gallery/second.jpg' },
  { src: '/gallery/third.jpg' },
];

// Fetch Instagram images in getServerSideProps
export async function getServerSideProps() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN; 
  const userId = process.env.INSTAGRAM_USER_ID; 

  const res = await fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`);
  const data = await res.json();

  return {
    props: {
      instagramImages: data.data || [],
    },
  };
}

export default function Media({ instagramImages }: { instagramImages: any[] }) {
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
        <p className="text-center text-lg md:text-2xl font-semibold dark:text-dark-text text-dark-text">
          FutureMD captured in some stunning photos!
        </p>
      </header>
      <Footer />
    </main>
  );
}
