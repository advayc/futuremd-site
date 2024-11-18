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

  const toggleMenu = () => {
    console.log("Menu toggled:", !isMenuOpen);
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="relative bg-transparent flex justify-center w-full border-b-2 border-gray-300 dark:border-zinc-900 z-50">
      <nav className="flex items-center p-4 w-screen max-w-screen-xl">
        <div className="md:hidden flex items-center justify-between w-full">
          <button onClick={toggleMenu} className="text-xl p-[7px]">
            <Menu />
          </button>
          <a href="/" className="flex-grow-0 mx-auto">
            <img src="/logo.png" alt="Logo" className="h-[50px] logo" />
          </a>
          <ToggleButton selected={selected} setSelected={setSelected} />
        </div>

        <div className="hidden md:flex items-center flex-grow justify-center">
          <a href="/" className="hidden md:flex-shrink-0 md:block md:mr-10">
            <img src="/logo.png" alt="Logo" className="h-[50px] logo" />
          </a>
          {['About Us', 'Our Team', 'Sponsors', 'Events', 'Media', 'Blogs', 'Contact Us'].map((item, idx) => (
            <a
              key={idx}
              href={`/${item.toLowerCase().replace(/ /g, '')}`}
              className={`relative mr-10 font-bold ${selected === 'light' ? 'text-light-text' : 'text-white'} hover-border transition hover:text-li dark:hover:text-hov`}
            >
              {item}
            </a>
          ))}
          <ToggleButton selected={selected} setSelected={setSelected} />
        </div>
      </nav>

      {isMenuOpen && (
        <div className={`absolute left-0 right-0 top-full bg-${selected === 'light' ? 'white' : 'black'} text-${selected === 'light' ? 'black' : 'white'} shadow-lg z-50`}>
          <div className="flex flex-col p-4">
            {['About Us', 'Our Team', 'Sponsors', 'Events', 'Media', 'Blogs', 'Contact Us'].map((item, idx) => (
              <a
                key={idx}
                href={`/${item.toLowerCase().replace(/ /g, '')}`}
                className="relative py-2 hover-border transition hover:text-li dark:hover:text-hov font-bold"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
