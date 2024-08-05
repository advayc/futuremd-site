import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from 'next/head'; 
import { Footer } from '@/components/footer';
import { roles } from '@/lib/roles';

const inter = Inter({ subsets: ["latin"] });

const Highlight = ({ text }: { text: string }) => (
  <span className="dark:text-white text-black font-bold">{text}</span>
);

const RolePopup = ({ role, onClose }: { role: typeof roles[0], onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#0c0c0c] p-8 rounded-lg max-w-2xl mx-4 relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h3 className="text-center text-3xl font-bold mb-6 text-gray-800 dark:text-white">{role.title}</h3>
        <p className="dark:text-zinc-400 font-bold text-zinc-600 mb-6 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: role.description }}></p>
        {role.status === "available" && (
          <a 
            href={role.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Apply Now
          </a>
        )}
        {role.status === "unavailable" && (
          <button 
            className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Unavailable
          </button>
        )}
      </div>
    </div>
  );
  
export default function Apply() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<typeof roles[0] | null>(null);

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
    <main className={`min-h-screen flex flex-col pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Apply</title></Head>
      <Navbar showAnimation={false} />

      <section className="w-full flex flex-col items-center">
        <div className="w-full p-8 mt-4 dark:bg-[#000000] flex flex-col md:flex-row items-center justify-center mb-12 md:mb-8">
          <div id="who-we-are" className="flex flex-col items-center md:items-start justify-center text-center md:text-left md:mr-32">
            <h2 className=" text-6xl sm:text-6xl md:text-8xl font-bold dark:text-white text-black md:mb-4 mb-[-50px]">Join Our <br/><span className="text-li dark:text-hov">Team</span></h2>
          </div>
          <div className="mt-12 md:mt-2">
            <img src='/guestspeakers.png' alt="Meta" className="w-[670px]"/>
          </div>
        </div>
      </section>

      <svg width="1916" height="230" viewBox="0 0 1916 230" fill="currentColor" className="rotate-180 w-full h-auto text-primary dark:text-dprimary -mt-20 relative top-[5px]">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0C640 0 1280 0 1920 0C1920 27.3333 1920 54.6667 1920 82C1812.72 90.3729 1705.37 97.8729 1597.97 104.5C1461.49 112.233 1324.92 115.233 1188.28 113.5C1069.64 109.91 951.016 105.91 832.405 101.5C740.988 98.9498 649.56 97.9498 558.119 98.5C484.895 100.323 411.694 102.989 338.517 106.5C225.638 113.757 112.799 121.59 0 130C0 86.6667 0 43.3333 0 0Z" />
      </svg>

      <div className="w-full flex flex-col items-center justify-center bg-primary dark:bg-dprimary shadow hover:shadow-lg px-4 sm:px-8 md:px-16 pb-12 md:pb-28">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-[-10px] md:mb-4 dark:text-white text-center">Why Join Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-center">
          {[
            { title: "Volunteer Hours", description: <>Gain <Highlight text="valuable" /> volunteer hours by participating in our <Highlight text="diverse events" /> or contributing to our behind-the-scenes projects.</> },
            { title: "Work in a Team", description: <>Work alongside a <Highlight text="dedicated" /> team sharing similar <Highlight text="interests" /> in the medical field and/or aiding the youth in our <Highlight text="community" />.</> },
            { title: "Have a Voice", description: <>Regardless of <Highlight text="role or experience" />, every team member at FutureMD <Highlight text="has a say" /> in our projects, events, and planning.</> },
            { title: "Impact a Community", description: <>Raise <Highlight text="awareness" />, <Highlight text="empower" />, and <Highlight text="aid" /> the youth in our local <Highlight text="community" /> by <Highlight text="guiding them" /> on the path to a medical profession.</> },
            { title: "Learn New Skills", description: <>Obtain <Highlight text="new skills" />, <Highlight text="achievements" />, and <Highlight text="knowledge" /> from our peers, mentors, and experienced guest speakers!</> },
            { title: "Benefits", description: <>Receive complimentary FutureMD merchandise including <Highlight text="your very own hoodie" />, <Highlight text="t-shirt" />, and <Highlight text="complementary catering" /> at our events.</> }
          ].map((item, index) => (
            <div key={index} className="p-4 py-6 dark:bg-[#0c0c0c] bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-li dark:text-hov mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm font-bold text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <svg width="100%" height="auto" viewBox="0 0 1916 230" fill="currentColor" className="w-full text-primary dark:text-dprimary -mt-4 md:-mt-20 relative top-[5px]">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0C640 0 1280 0 1920 0C1920 27.3333 1920 54.6667 1920 82C1812.72 90.3729 1705.37 97.8729 1597.97 104.5C1461.49 112.233 1324.92 115.233 1188.28 113.5C1069.64 109.91 951.016 105.91 832.405 101.5C740.988 98.9498 649.56 97.9498 558.119 98.5C484.895 100.323 411.694 102.989 338.517 106.5C225.638 113.757 112.799 121.59 0 130C0 86.6667 0 43.3333 0 0Z" />
      </svg>

      <div className="px-4 sm:px-8 mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 dark:text-white text-center">Roles & Responsibilities</h2>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-8 dark:dark-text text-[#828282] text-center">Click on a card to reveal the responsibilities <br/> for each position and application</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {roles.map((role, index) => (
            <div 
              key={index} 
              className="p-6 bg-white dark:bg-dprimary rounded-lg shadow-md hover:shadow-xl cursor-pointer relative transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full max-w-[450px] h-[130px]" 
              onClick={() => setSelectedRole(role)}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <span className={`text-xs sm:text-sm font-bold px-3 py-1 rounded mb-4 ${
                  role.status === 'available' ? 'bg-green-100 text-green-800 dark:bg-green-300 dark:text-green-900' : 'bg-red-100 text-red-800 dark:bg-red-300 dark:text-red-900'
                }`}>
                  {role.status.toUpperCase()}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-center">{role.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedRole && <RolePopup role={selectedRole} onClose={() => setSelectedRole(null)} />}
      
      <Footer />
    </main>
  );
}
