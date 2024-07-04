import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen flex flex-col items-center justify-between p-4 md:p-8 ${inter.className} dark:bg-dark-bg bg-light-bg`}>
      <Navbar />
      <div className="text-center px-4 md:px-8">
        <h1 className="font-black text-hov light:text-[#3C55B7] text-4xl md:text-8xl">
          FutureMD{" "}
          <span className="dark:text-white text-black">Inc</span>
        </h1>
        <p className="text-lg md:text-3xl font-bold mt-4 md:mt-8 text-dark-text light:text-gray-600">
        A student-led nonprofit organization with the goal to educate <br></br> teens about life during & after medical school!
        </p>
      </div>
      <Footer />
    </main>
  );
}
