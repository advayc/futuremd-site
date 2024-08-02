export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between justify-center items-center md:items-start">
        <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
          <img src="/logo.png" alt="Logo" className="w-20 md:w-40 h-auto logo pointer mt-4 md:mt-10" />
        </div>
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
              <a href='https://forms.gle/Sa52gmcHybHgnk438' target="_blank" className="hover:text-zinc-300 text-gray-400 font-bold text-sm">Join Our Team</a>
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
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 mt-4">
          <h4 className="font-bold mb-4 text-lg md:text-xl text-center md:text-left">Social Media</h4>
          <ul className="flex flex-col items-center md:items-start">
            <li className="mb-3 md:mb-4">
              <a href="https://www.instagram.com/futuremd_team/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-zinc-300 text-gray-400 font-bold flex items-center">
                Instagram
              </a>
            </li>
            <li className="mb-3 md:mb-4">
              <a href="https://www.linkedin.com/company/futuremdteam/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-zinc-300 text-gray-400 font-bold flex items-center">
                Linkedin
              </a>
            </li>
            <li className="mb-3 md:mb-4">
              <p className="text-transparent text-[1px]">.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t-2 border-gray-700 pt-4 text-center">
        <p className="text-gray-400 font-bold">© 2024 FutureMD Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
};
