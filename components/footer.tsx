import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between justify-center items-center md:items-start">
        <div className="flex-1 md:ml-20 flex flex-col items-center md:items-start mb-8 md:mb-0 mt-4">
          <h4 className="font-bold mb-4 text-lg md:text-xl text-center md:text-left">About</h4>
          <ul className="flex flex-col items-center md:items-start">
            <li className="mb-3 md:mb-4">
              <a href="/about" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Who We Are</a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href="/#what-does" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">What We Do</a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href="/about/#our-mission" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Our Mission</a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href="/#vision" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Our Vision</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 mt-4">
          <h4 className="font-bold mb-4 text-lg md:text-xl text-center md:text-left">Staff</h4>
          <ul className="flex flex-col items-center md:items-start">
            <li className="mb-3 md:mb-4">
              <a href="/team#guests" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Guest Speakers</a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href="/about#our-executives" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Our Executives</a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href="/team" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Our Team</a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href='/apply' className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Join Our Team</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 mt-4">
          <h4 className="font-bold mb-4 text-lg md:text-xl text-center md:text-left">Events</h4>
          <ul className="flex flex-col items-center md:items-start">
            <li className="mb-3 md:mb-4">
              <a href="/path2med" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Upcoming Event</a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href="/events" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">All Events</a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href="/media" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Gallery</a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href="/register" target="_blank" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Register</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 mt-4">
          <h4 className="font-bold mb-4 text-lg md:text-xl text-center md:text-left">Sponsorships</h4>
          <ul className="flex flex-col items-center md:items-start">
            <li className="mb-3 md:mb-4">
              <a href="/sponsors" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Our Sponsors</a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href="/sponsorship" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Sponsor Us</a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href="/contact" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 mt-4">
          <h4 className="font-bold mb-4 text-lg md:text-xl text-center md:text-left">Miscellaneous</h4>
          <ul className="flex flex-col items-center md:items-start">
            <li className="mb-3 md:mb-4">
              <a href="/newsletter" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Newsletter</a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href="/blog" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Blog</a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href="/faq" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">FAQ</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
        <img src="/logo.png" alt="Logo" className="logo w-20 h-auto mt-4 sm:ml-12" />
        <div className="flex justify-center items-center mt-4 sm:mt-0 sm:mr-12">
          <div className="flex gap-6 sm:gap-10">
            <a href="https://www.instagram.com/futuremd_team/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={32} className="text-hov hover:text-primary transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com/company/futuremdteam/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} className="text-hov hover:text-primary transition-all duration-300" />
            </a>
            <a href="https://www.tiktok.com/@futuremd_team" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={32} className="text-hov hover:text-primary transition-all duration-300" />
            </a>
            <a href="mailto:contact.futuremd@gmail.com">
              <MdEmail size={36} className="text-hov hover:text-primary transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 border-t-2 border-gray-700 pt-4 dark:border-gray-800 px-4 sm:px-12">
        <div className="flex flex-col sm:flex-row sm:justify-between text-center sm:text-left">
          <p className="text-gray-400 font-bold">© 2024 <span className="text-hov">FutureMD Inc.</span> All Rights Reserved</p>
          <ul className="mt-4 sm:mt-0 flex flex-col sm:flex-row justify-center gap-4 text-xs lg:justify-end">
            <li>
              <a href="/terms-and-conditions" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Terms & Services</a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

    </footer>
  );
};
