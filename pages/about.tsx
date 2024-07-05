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
      title: "Advay Chandorkar",
      role: "Developer",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder.",
      link: "https://advay.com",
      image: "/path/to/advay.jpg",
      linkedin: "https://www.linkedin.com/in/advay",
      instagram: "https://www.instagram.com/advay",
    },
    {
      title: "Jane Doe",
      role: "Designer",
      description: "Jane is a creative designer who specializes in user experience and user interface design. Her work is characterized by a user-centric approach and attention to detail.",
      link: "https://janedoe.com",
      image: "/path/to/janedoe.jpg",
      linkedin: "https://www.linkedin.com/in/janedoe",
      instagram: "https://www.instagram.com/janedoe",
    },
    {
      title: "John Smith",
      role: "Product Manager",
      description: "John has extensive experience in product management, focusing on developing innovative solutions that meet user needs and business goals.",
      link: "https://johnsmith.com",
      image: "/path/to/johnsmith.jpg",
      linkedin: "https://www.linkedin.com/in/johnsmith",
      instagram: "https://www.instagram.com/johnsmith",
    },
  ];
  