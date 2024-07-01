import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import {Footer} from "@/components/footer";
import Typewriter from "typewriter-effect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
    <main className={`min-h-screen flex-col items-center justify-between p-[25px] bg-black ${inter.className}`}>
      <Navbar />

        <Footer />
    </main>
  );
}
