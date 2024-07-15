import React, { useState, useEffect } from 'react';
import ToggleButton from '@/components/ToggleButton';
import { Menu } from 'lucide-react';

type ToggleOptionsType = 'dark' | 'light';

const Navbar: React.FC = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (selected === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [selected]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-transparent flex justify-center">
      <nav className="flex items-center p-4">
        <a href="/">
          <img src="logo.png" alt="Logo" className="h-[50px] mr-9 logo" />
        </a>
        <div className="hidden md:flex items-center">
          <a href="/about" className={`mr-9 font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover:text-hov transition delay-50`}>
            About Us
          </a>
          <a href="/team" className={`mr-9 font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover:text-hov transition delay-50`}>
            Our Team
          </a>
          <a href="/" className={`mr-9 font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover:text-hov transition delay-50`}>
            Sponsors
          </a>
          <a href="/" className={`mr-9 font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover:text-hov transition delay-50`}>
            Schedule
          </a>
          <a href="/" className={`mr-9 font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover:text-hov transition delay-50`}>
            Media
          </a>
          <a href="/contact" className={`mr-9 font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover:text-hov transition delay-50`}>
            Contact Us
          </a>
          <ToggleButton selected={selected} setSelected={setSelected} />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-xl">
            <Menu />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={`absolute left-0 right-0 bg-${selected === 'light' ? 'white' : 'black'} text-${selected === 'light' ? 'black' : 'white'} shadow-lg`}>
          <div className="flex flex-col p-4">
            <div className="flex justify-between items-center">
              <a href="/about" className={`font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover:text-hov transition delay-50`}>
                About Us
              </a>
              <button onClick={toggleMenu} className="text-2xl" aria-label="Close menu">
                &times;
              </button>
            </div>
            <a href="/team" className="py-1 hover:text-hov transition delay-50 font-bold">Our Team</a>
            <a href="/" className="py-1 hover:text-hov transition delay-50 font-bold">Sponsors</a>
            <a href="/" className="py-1 hover:text-hov transition delay-50 font-bold">Schedule</a>
            <a href="/" className="py-1 hover:text-hov transition delay-50 font-bold">Media</a>
            <div className="flex justify-between items-center">
              <a href="/contact" className="py-1 hover:text-hov transition delay-50 font-bold">Contact Us</a>
              <ToggleButton selected={selected} setSelected={setSelected} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
