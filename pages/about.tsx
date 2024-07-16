import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head'; 

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
    <main className={`min-h-screen flex flex-col items-center py-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - About</title></Head>
      <Navbar />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl">
        <h1 className="text-7xl font-bold my-8 mb-4 text-center dark:text-white text-black"> About Us</h1>
        <p className="text-center text-lg md:text-2xl font-semibold dark:text-dark-text text-[#828282]">
          Discover The Purpose & Passion Behind FutureMD!
        </p>
      </header>
      <div className="flex flex-col justify-start items-start border-2 border-hov rounded-lg p-8 shadow hover:shadow-lg mt-8 max-w-4xl">
        
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-4 text-black dark:text-hov">Who Are We?</h1>
          <p className="text-base md:text-lg text-zinc-600 dark:text-dark-text">
            We are <span className="font-bold">FutureMD</span>, a student-led, registered nonprofit organization dedicated to educating teens about life during and after medical school! 📚🎓
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <p className="text-base md:text-lg text-zinc-600 dark:text-dark-text">
              Our mission is to provide valuable insights and resources to aspiring medical students, helping them navigate the challenges of medical education and beyond.
              <br /><br />
              Through workshops, mentorship programs, and informative content, we aim to inspire and support the next generation of medical professionals.
            </p>
          </div>
          <img src="/logo.png" alt="FutureMD Logo" className="w-64 h-64 mt-4 md:mt-0 md:ml-4" />
        </div>

        <div className="mb-4">
          <h1 className="text-3xl font-bold mt-4 mb-4 text-black dark:text-hov">Our Mission</h1>
          <p className="text-base md:text-lg text-zinc-600 dark:text-dark-text mb-4">
            At FutureMD, our mission is to bridge the gap between aspiring medical students and the realities of medical education. We strive to provide comprehensive guidance and support to teens interested in pursuing a career in medicine.
          </p>
          <p className="text-base md:text-lg text-zinc-600 dark:text-dark-text mb-4">
            We believe in empowering students with the knowledge and skills necessary to succeed in their medical journey. <span className="dark:text-primary text-li font-semibold">Our initiatives include:</span>
          </p>
          <ul className="list-disc pl-6 text-base md:text-lg text-zinc-600 dark:text-dark-text mb-4">
            <li>Interactive workshops led by experienced medical professionals.</li>
            <li>Mentorship programs connecting students with current medical students and doctors.</li>
            <li>Resources and guides on medical school applications, study tips, and career advice.</li>
          </ul>
          <p className="text-base md:text-lg text-zinc-600 dark:text-dark-text">
            Join us as we pave the way for future doctors and medical leaders!
          </p>
        </div>
      </div>
    </main>
  );
}
