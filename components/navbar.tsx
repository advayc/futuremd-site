import React, { useState, useEffect } from 'react';
import ToggleButton from '@/components/ToggleButton';
import { Menu } from 'lucide-react';
import Link from 'next/link'; // For Next.js; replace with appropriate router if not using Next.js

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
    console.log('Menu toggled:', !isMenuOpen);
    setIsMenuOpen((prev) => !prev);
  };

  // Update Pages Here
  const navItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'Events', href: '/events' },
    { label: 'Media', href: '/media' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className="relative bg-transparent flex justify-center w-full border-b-2 border-gray-300 dark:border-zinc-900 z-50">
      <nav className="flex items-center p-4 w-screen max-w-screen-xl">
        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between w-full">
          <button onClick={toggleMenu} className="text-xl p-[7px]">
            <Menu />
          </button>
          <Link href="/" className="flex-grow-0 mx-auto">
            <img src="/logo.png" alt="Logo" className="h-[50px] logo" />
          </Link>
          <ToggleButton selected={selected} setSelected={setSelected} />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center flex-grow justify-center">
          <Link href="/" className="hidden md:flex-shrink-0 md:block md:mr-10">
            <img src="/logo.png" alt="Logo" className="h-[50px] logo" />
          </Link>
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href} 
              className={`relative mr-10 font-bold ${
                selected === 'light' ? 'text-light-text' : 'text-white'
              } hover-border transition hover:text-li dark:hover:text-hov`}
            >
              {item.label}
            </Link>
          ))}
          <ToggleButton selected={selected} setSelected={setSelected} />
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className={`absolute left-0 right-0 top-full bg-${
            selected === 'light' ? 'white' : 'black'
          } text-${selected === 'light' ? 'black' : 'white'} shadow-lg z-50`}
        >
          <div className="flex flex-col p-4">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="relative py-2 hover-border transition hover:text-li dark:hover:text-hov font-bold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
