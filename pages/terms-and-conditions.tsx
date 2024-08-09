import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head';
import { Footer } from '@/components/footer';
const inter = Inter({ subsets: ["latin"] });

const Terms: React.FC = () => {
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
    <main className={`min-h-screen pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Terms & Conditions</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black">Terms & Conditions</h1>
      </header>

      <section className="flex flex-col items-center">
        <div className="w-11/12 md:w-5/6 border-2 border-hov rounded-lg p-8 shadow hover:shadow-lg mt-12">
          <h2 className="text-4xl font-bold dark:text-white text-black mb-4">Our <span className="text-li dark:text-hov">Terms and Conditions</span></h2>
          <p className="text-lg dark:text-dark-text text-[#828282] font-bold leading-9">
            At FutureMD, we are committed to providing a transparent and secure experience for our users. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing our website, you agree to comply with these terms. We reserve the right to update or modify these terms at any time without prior notice. It is your responsibility to review the terms periodically for any changes.
          </p>
          <div className="pt-4 pd-3 px-4 max-w-9xl text-center mt-8">
            <h2 className="text-4xl font-bold mb-9 dark:text-white text-black">Read Our 
                <a href="https://drive.google.com/file/d/1iD6CSOjYTxRTaWGE1H1ceT7LEJVX5cHz/view?usp=sharing" target="_blank" className="text-li transition delay-100 dark:text-hov"> Terms & Conditions</a></h2>
            <div className="flex justify-center">
            <iframe
              width="640"
              height="480"
              src="https://drive.google.com/file/d/1iD6CSOjYTxRTaWGE1H1ceT7LEJVX5cHz/preview"
            >
            </iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Terms;
