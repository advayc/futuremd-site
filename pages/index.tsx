import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen flex flex-col items-center justify-between bg-black p-[25px] ${inter.className}`}>
      <Navbar />

      <div className="text-center">
        <h1 className="text-hov font-black text-8xl md:text-[120px]">
          FutureMD{" "}
          <span className="text-white">Inc</span>
        </h1>
        <p className="text-lg md:text-3xl font-medium mt-5 text-gray-400">
          A student-led nonprofit organization
        </p>
      </div>

      <Footer />
    </main>
  );
}
