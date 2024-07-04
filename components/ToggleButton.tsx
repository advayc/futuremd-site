import React from 'react';
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
        selected === 'light'
          ? 'text-black bg-white hover:bg-gray-300'
          : 'text-white hover:bg-[#191919] border-none'
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

export default ToggleButton;
