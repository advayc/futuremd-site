import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Navbar from "@/components/navbar";
import ContactForm from "@/components/ContactForm";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <main className={`min-h-screen flex-col items-center justify-between pt-[25px] ${inter.className} dark:bg-black bg-light-bg`}>
      <Navbar />
      <div className="pt-[10px]">
        <h1 className="text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black">Contact Us</h1>
        <p className="text-center mb-1 text-2xl font-bold dark:text-dark-text text-gray-600">
          If you have a question, or business inquiry, <br />feel free to contact us here to get a quick response!
        </p>
        <ContactForm />
        <div className="flex flex-col items-center mt-6 p-8">
          <h2 className="text-4xl font-bold mb-4 dark:text-white text-black">Connect With Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/futuremd_team/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} className="text-hov hover:text-primary transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com/company/futuremdteam/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} className="text-hov hover:text-primary transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
