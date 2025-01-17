import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head';
import { Footer } from '@/components/footer';


const Privacy: React.FC = () => {
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
    <main className={`min-h-screen pt-8  dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Privacy</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black">Privacy Policy</h1>
      </header>

      <section className="flex flex-col items-center">
        <div className="w-11/12 md:w-5/6 border-2 border-hov rounded-lg p-8 shadow hover:shadow-lg mt-12">
          <h2 className="text-4xl font-bold dark:text-white text-black mb-4">Our <span className="text-li dark:text-hov">Privacy Policy</span></h2>
          <p className="text-lg dark:text-dark-text text-dark-text font-bold leading-9">
            At FutureMD, we take your privacy seriously. This policy outlines how we handle your personal information and data. We ensure that all data provided to us is used responsibly and securely. We do not share your personal information with third parties without your consent, except as required by law. Your trust is important to us, and we are committed to maintaining the confidentiality and security of your information.
          </p>
          <div className="pt-4 pd-3 px-4 max-w-9xl text-center mt-8">
            <h2 className="text-4xl font-bold mb-9 dark:text-white text-black">Read Our 
                <a href="https://drive.google.com/file/d/1r1MTa6lIJULSTH3Olx_KWIpPMYKJ_qU5/view?usp=drive_link" target="_blank" className="text-li transition delay-100 dark:text-hov"> Privacy Policy Document</a></h2>
            <div className="flex justify-center">
            <iframe
              width="640"
              height="480"
              src="https://drive.google.com/file/d/1r1MTa6lIJULSTH3Olx_KWIpPMYKJ_qU5/preview"
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

export default Privacy;
