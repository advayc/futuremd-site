import React, { useState, useEffect } from 'react';
import ToggleButton from '@/components/ToggleButton';

type ToggleOptionsType = 'dark' | 'light';

const Navbar: React.FC = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>('light');

  useEffect(() => {
    if (selected === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [selected]);

  return (
    <header className={`${selected === 'light' ? 'bg-light-bg' : 'bg-dark-bg'}`}>
      <nav className="flex items-center justify-center">
        <a href="/">
          <img src="logo.png" alt="Logo" className="h-[50px] mr-9 logo" />
        </a>
        <a href="/about" className={`mr-9 font-bold transition delay-50 ${selected === 'light' ? 'text-light-text' : 'text-white'} hover:text-hov`}>
          About Us
        </a>
        <a href="/team" className={`mr-9 font-bold transition delay-50 ${selected === 'light' ? 'text-light-text' : 'text-white'} hover:text-hov`}>
          Our Team
        </a>
        <a href="#" className={`mr-9 font-bold transition delay-50 ${selected === 'light' ? 'text-light-text' : 'text-white'} hover:text-hov`}>
          Sponsors
        </a>
        <a href="#" className={`mr-9 font-bold transition delay-50 ${selected === 'light' ? 'text-light-text' : 'text-white'} hover:text-hov`}>
          Schedule
        </a>
        <a href="#" className={`mr-9 font-bold transition delay-50 ${selected === 'light' ? 'text-light-text' : 'text-white'} hover:text-hov`}>
          Media
        </a>
        <a href="/contact" className={`mr-9 font-bold transition delay-50 ${selected === 'light' ? 'text-light-text' : 'text-white'} hover:text-hov`}>
          Contact Us
        </a>
        <ToggleButton selected={selected} setSelected={setSelected} />
      </nav>
    </header>
  );
};

export default Navbar;
