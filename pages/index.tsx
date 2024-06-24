import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen flex-col items-center justify-between p-[25px] ${inter.className}`}
    >
      <Navbar></Navbar>
    </main>
  );
}
