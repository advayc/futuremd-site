import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-10 bg-[#D9EAFF] py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="absolute inset-x-0 text-center">
                <p className="font-bold text-black text-xl">
                    Made with <span className="text-red-500">❤️</span> by the{' '}
                    <a className="text-black font-bold hover:text-[#3C55B7] transition duration-200"
                       href="https://github.com/advayc/futuremd-site" target="_blank" rel="noopener noreferrer">
                        Dev Team
                    </a>
                </p>
            </div>
            <div className="flex space-x-6 ml-auto">
                <a href="https://www.instagram.com/futuremd_team/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={40} className="text-blue-600 hover:text-blue-900 transition-all duration-300" />
                </a>
                <a href="https://www.linkedin.com/company/futuremdteam/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={40} className="text-blue-600 hover:text-blue-900 transition-all duration-300" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
