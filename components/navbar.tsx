import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      className={`flex items-center p-2.5 transition-colors duration-300 rounded-md border ${
        selected === 'light' ? 'text-black bg-white hover:bg-gray-300' : 'text-white hover:bg-[#191919] border-none'
      }`}
    >
      <motion.div
        key={selected}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.5 }}
      >
        {selected === 'light' ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
      </motion.div>
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
    <header className={`transition-colors duration-500 ${selected === 'light' ? 'bg-white' : 'bg-black'}`}>
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
