import React, { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

type ToggleOptionsType = 'dark' | 'light';

const ToggleButton = ({
  selected,
  setSelected,
}: {
  selected: ToggleOptionsType;
  setSelected: React.Dispatch<React.SetStateAction<ToggleOptionsType>>;
}) => {
  const toggleTheme = () => {
    setSelected((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-2 px-3 py-1.5 transition-colors ${
        selected === 'light' ? 'text-black' : 'text-white'
      }`}
    >
      {selected === 'light' ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
      <span></span>
    </button>
  );
};

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
    <header className={`transition-colors ${selected === 'light' ? 'bg-white' : 'bg-black'}`}>
      <nav className="flex items-center justify-center">
        <a href="/">
          <img src="logo.png" alt="Logo" className="h-[50px] mr-9 logo"/>
        </a>
        <a href="#" className="text-gray-100 mr-9 hover:text-hov font-semibold transition delay-50">About</a>
        <a href="#" className="text-gray-100 mr-9 hover:text-hov font-semibold transition delay-50">Sponsors</a>
        <a href="#" className="text-gray-100 mr-9 hover:text-hov font-semibold transition delay-50">Schedule</a>
        <a href="#" className="text-gray-100 mr-9 hover:text-hov font-semibold transition delay-50">Media</a>
        <a href="/contact" className="text-gray-100 mr-9 hover:text-hov font-semibold transition delay-50">Contact Us</a>
        <ToggleButton selected={selected} setSelected={setSelected} />
      </nav>
    </header>
  );
};

export default Navbar;
