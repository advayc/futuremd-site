import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen flex flex-col items-center justify-between p-[25px] ${inter.className} dark:bg-dark-bg bg-light-bg`}>
      <Navbar />
      <div className="text-center">
        <h1 className="font-black dark:text-hov text-[#3C55B7] text-8xl md:text-[120px]">
          FutureMD{" "}
          <span className="dark:text-white text-black">Inc</span>
        </h1>
        <p className="text-lg md:text-3xl font-bold mt-5 dark:text-dark-text text-gray-600">
        A student-led nonprofit organization with the goal to educate <br></br> teens about life during & after medical school!
        </p>
      </div>
      <Footer />
    </main>
  );
}
