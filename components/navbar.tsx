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
    <header className="bg-transparent">
      <nav className="flex items-center justify-center">
        <a href="/">
          <img src="logo.png" alt="Logo" className="h-[50px] mr-9 logo" />
        </a>
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
      </nav>
    </header>
  );
};

export default Navbar;
