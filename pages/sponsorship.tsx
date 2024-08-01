import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head';
import { Footer } from '@/components/footer';
const inter = Inter({ subsets: ["latin"] });

export default function Sponsorships() {
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
      <Head><title>FutureMD - Sponsorship</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl text-center">
      <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black"> Sponsor Us</h1>
      </header>

      <section className="flex flex-col items-center">
        <div className="w-11/12 md:w-5/6 border-2 border-hov rounded-lg p-8 shadow hover:shadow-lg mt-12">
          <h2 className="text-4xl font-bold dark:text-white text-black mb-4">Why Should You Sponsor Us?</h2>
          <p className="text-lg dark:text-dark-text text-[#828282] font-bold leading-9">
            FutureMD is always looking for new sponsors to aid our local cause! There are various ways you can support our non-profit organization to reach its goals and initiatives. Financial sponsorships are always a huge support to us as they help us accomplish our goals, upscale our event equipment, and increase the quality and impact we make on our local community and attendees. In addition to this, we are always open to other forms of sponsorships, which may include providing us with resources, catering, experienced guest speakers, merchandise, and more! — whether you’re a small business owner, or a corporation with a huge team, there are plenty of ways you can help us out. FutureMD has always strived to constantly improve and be the best we possibly can. We run on sponsorships and donations, and as a registered non-profit incorporation under the OBR, we guarantee our sponsors that ALL their resources and funding provided are used SOLELY on FutureMD. Supporting our mission will not only support our team, but it will benefit our local community and increase the impact we can make on the next generation of medical specialists!
          </p>
          <div className="pt-4 pd-3 px-4 max-w-9xl text-center mt-8">
            <h2 className="text-4xl font-bold mb-9 dark:text-white text-black">Discover Our 
                <a href="/FutureMD Sponsorship Proposal.pdf" target="_blank" className="hover:text-li transition delay-100 dark:hover:text-hov"> Sponsorship Package</a></h2>
            <div className="flex justify-center">
              <embed src="/FutureMD Sponsorship Proposal.pdf" type="application/pdf" className="w-full md:w-2/3 lg:w-1/2 h-[600px] md:h-[800px]" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
