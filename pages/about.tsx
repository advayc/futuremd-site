import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HoverEffect } from "@/components/ui/hover-effect";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <main className={`min-h-screen items-center justify-between py-8 ${inter.className} dark:bg-dark-bg bg-light-bg`}>
      <Navbar />
      <header className="pt-8 pd-3 px-4 w-full max-w-9xl">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black"> About Us</h1>
        <p className="text-center mb-4 text-lg md:text-2xl font-semibold dark:text-dark-text text-gray-600">
          Discover The purpose, passion and team behind FutureMD!
        </p>
      </header>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={person} />
      </div>
    </main>
  );
}

export const person = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: "/public/logo.png",
    linkedin: "https://www.linkedin.com/company/stripe",
    instagram: "https://www.instagram.com/stripe",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    image: "/public/logo.png",
    linkedin: "https://www.linkedin.com/company/netflix",
    instagram: "https://www.instagram.com/netflix",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    image: "/public/logo.png",
    linkedin: "https://www.linkedin.com/company/google",
    instagram: "https://www.instagram.com/google",
  },
];
