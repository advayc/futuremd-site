import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Typewriter from "typewriter-effect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
    <main
      className={`min-h-screen flex-col items-center justify-between p-[25px] ${inter.className}`}
    >
      <Navbar />

      <h1 className="text-4xl md:text-6xl font-bold text-black ml-10 mt-[150px]">
          Building the future of 
          <span style={{ color: '#3C55B7' }}>
            <Typewriter 
              options={{
                strings: ['Doctors', 'Medical Students', 'Healthcare Experts', 'Innovators'], 
                autoStart: true, 
                loop: true
              }}
            />
          </span>
        </h1>
            
      <p className="text-[#828282] font-bold mt-4 ml-14 text-[22px]">
          A student-led nonprofit organization with the <br></br>
          goal to educate teens about life during & after <br></br>
          medical school!
        </p>

    </main>
  );
}
