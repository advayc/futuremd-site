import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Navbar from "@/components/navbar";
import ContactForm from "@/components/ContactForm";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function Contact() {
    return (
        <>
            <main className={`min-h-screen flex-col items-center justify-between p-[25px] ${inter.className}`}>
                <Navbar />
                <h1 className="text-6xl font-bold my-8 mb-4 text-black text-center">Contact Us</h1>
                <p className="text-center mb-1 text-2xl font-bold text-[#828282]">
                    If you have a question, or business inquiry, <br></br>feel free to contact us here to get a quick response!
                </p>
                <ContactForm />
            </main>
            <div className="flex flex-col items-center mt-6 p-8 bg-[#D9EAFF]">
                <h2 className="text-4xl font-bold mb-4 text-black">Connect With Us</h2>
                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/futuremd_team/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={40} className="text-blue-600 hover:text-blue-900 transition-all duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/company/futuremdteam/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={40} className="text-blue-600 hover:text-blue-900 transition-all duration-300" />
                    </a>
                </div>
            </div>
        </>
    );
}
