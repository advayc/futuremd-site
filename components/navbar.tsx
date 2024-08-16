import React, { useState, useEffect } from 'react';
import ToggleButton from '@/components/ToggleButton';
import { Menu } from 'lucide-react';

type ToggleOptionsType = 'dark' | 'light';

interface NavbarProps {
  showAnimation: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showAnimation }) => {
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
    <header className={`bg-transparent flex justify-center w-full border-b-2 border-gray-300 dark:border-zinc-900 ${showAnimation ? 'animate-fade-in-down' : ''}`}>
      <nav className="flex items-center p-4 w-screen max-w-screen-xl">
        <div className="md:hidden flex items-center justify-between w-full">
          <button onClick={toggleMenu} className="text-xl p-[7px]">
            <Menu />
          </button>
          <a href="/" className="flex-grow-0 mx-auto">
            <img src="logo.png" alt="Logo" className="h-[50px] logo" />
          </a>
          <ToggleButton selected={selected} setSelected={setSelected} />
        </div>
        <div className="hidden md:flex items-center flex-grow justify-center">
          <a href="/" className="hidden md:flex-shrink-0 md:block md:mr-9">
            <img src="logo.png" alt="Logo" className="h-[50px] logo" />
          </a>
          <a href="/about" className={`relative mr-9 font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover-border transition hover:text-li dark:hover:text-hov transition delay-50 delay-50`}>
            About Us
          </a>
          <a href="/team" className={`relative mr-9 font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover-border transition hover:text-li dark:hover:text-hov transition delay-50 delay-50`}>
            Our Team
          </a>
          <a href="/sponsors" className={`relative mr-9 font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover-border transition hover:text-li dark:hover:text-hov transition delay-50 delay-50`}>
            Sponsors
          </a>
          <a href="/events" className={`relative mr-9 font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover-border transition hover:text-li dark:hover:text-hov transition delay-50 delay-50`}>
            Events
          </a>
          <a href="/media" className={`relative mr-9 font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover-border transition hover:text-li dark:hover:text-hov transition delay-50 delay-50`}>
            Media
          </a>
          <a href="/contact" className={`relative mr-9 font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover-border transition hover:text-li dark:hover:text-hov transition delay-50 delay-50`}>
            Contact Us
          </a>
          <ToggleButton selected={selected} setSelected={setSelected} />
        </div>
      </nav>

      {isMenuOpen && (
        <div className={`absolute left-0 right-0 bg-${selected === 'light' ? 'white' : 'black'} text-${selected === 'light' ? 'black' : 'white'} shadow-lg`}>
          <div className="flex flex-col p-4">
            <div className="flex justify-between items-center">
              <a href="/about" className={`relative font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover-border transition hover:text-li dark:hover:text-hov transition delay-50 delay-50`}>
                About Us
              </a>
              <button onClick={toggleMenu} className="text-2xl" aria-label="Close menu">
                &times;
              </button>
            </div>
            <a href="/team" className="relative py-1 hover-border transition hover:text-li dark:hover:text-hov transition delay-50 delay-50 font-bold">Our Team</a>
            <a href="/sponsors" className="relative py-1 hover-border transition hover:text-li dark:hover:text-hov transition delay-50 delay-50 font-bold">Sponsors</a>
            <a href="/events" className="relative py-1 hover-border transition hover:text-li dark:hover:text-hov transition delay-50 delay-50 font-bold">Events</a>
            <a href="/media" className="relative py-1 hover-border transition hover:text-li dark:hover:text-hov transition delay-50 delay-50 font-bold">Media</a>
            <div className="relative flex justify-between items-center">
              <a href="/contact" className="relative py-1 hover-border transition hover:text-li dark:hover:text-hov transition delay-50 delay-50 font-bold">Contact Us</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
