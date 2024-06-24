import React from 'react';

const Navbar: React.FC = () => {
return (
    <header className="flex justify-between items-center">
        <img src="logo.png" alt="Logo" className="h-[50px]" />
        <nav className="flex items-center">
            <a href="#" className="text-black font-bold mr-9 hover:text-[#3C55B7] transition duration-200">Our Team</a>
            <a href="#" className="text-black font-bold mr-9 hover:text-[#3C55B7] transition duration-200">Our Mission</a>
            <a href="#" className="text-black font-bold mr-9 hover:text-[#3C55B7] transition duration-200">Events</a>
            <a href="#" className="bg-[#D9EAFF] text-black px-5 py-3 rounded-[10px] font-bold mr-10 hover:opacity-80 transition duration-300">Join Us</a>
            <a href="#" className="bg-[#28387D] text-white px-5 py-3 rounded-[10px] font-bold mr-10 hover:opacity-80 transition duration-300">Contact Us</a>
        </nav>
    </header>
);
};

export default Navbar;
