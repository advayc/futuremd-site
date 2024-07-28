export const Foot = () => {
  return (
    <footer className="dark:bg-white dark:text-black bg-black text-white py-8 w-full">
      <div className="container flex justify-between items-center h-full">
        <div className="flex-1 flex items-center justify-center">
          <img src="/logo.png" alt="Logo" className="w-48 h-48" />
        </div>
        <div className="flex-1 ml-14 flex items-center">
          <div>
            <h4 className="font-bold mb-8 text-lg">About</h4>
            <ul>
              <li className="mb-4">
                <a href="/about/#who-we-are" className="hover:text-zinc-300 text-gray-400 dark:text-gray-600 hover:dark:text-zinc-800 font-bold">Who We Are</a>
              </li>
              <li className="mb-4">
                <a href="/about/#our-mission" className="hover:text-zinc-300 text-gray-400 dark:text-gray-600 hover:dark:text-zinc-800 font-bold">Our Mission</a>
              </li>
              <li className="mb-4">
                <a href="/about/#what-we-do" className="hover:text-zinc-300 text-gray-400 dark:text-gray-600 hover:dark:text-zinc-800 font-bold">What We Do</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 ml-14 flex items-center">
          <div>
            <h4 className="font-bold mb-8 text-lg">Staff</h4>
            <ul>
              <li className="mb-4">
                <a href="/team#guests" className="hover:text-zinc-300 text-gray-400 dark:text-gray-600 hover:dark:text-zinc-800 font-bold">Guest Speakers</a>
              </li>
              <li className="mb-4">
                <a href="#our-executives" className="hover:text-zinc-300 text-gray-400 dark:text-gray-600 hover:dark:text-zinc-800 font-bold">Our Executives</a>
              </li>
              <li className="mb-4">
                <a href="/team" className="hover:text-zinc-300 text-gray-400 dark:text-gray-600 hover:dark:text-zinc-800 font-bold">Our Team</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 ml-14 flex items-center">
          <div>
            <h4 className="font-bold mb-8 text-lg">Sponsorships</h4>
            <ul>
              <li className="mb-4">
                <a href="/sponsors" className="hover:text-zinc-300 text-gray-400 dark:text-gray-600 hover:dark:text-zinc-800 font-bold">Our Sponsors</a>
              </li>
              <li className="mb-4">
                <a href="/sponsorship" className="hover:text-zinc-300 text-gray-400 dark:text-gray-600 hover:dark:text-zinc-800 font-bold">Sponsor Us</a>
              </li>
              <li className="mb-4">
                <a href="/contact" className="hover:text-zinc-300 text-gray-400 dark:text-gray-600 hover:dark:text-zinc-800 font-bold">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 ml-14 flex items-center">
          <div>
            <h4 className="font-bold mb-8 text-lg">Events</h4>
            <ul>
              <li className="mb-4">
                <a href="/path2med" className="hover:text-zinc-300 text-gray-400 dark:text-gray-600 hover:dark:text-zinc-800 font-bold">Upcoming Event</a>
              </li>
              <li className="mb-4">
                <a href="/events" className="hover:text-zinc-300 text-gray-400 dark:text-gray-600 hover:dark:text-zinc-800 font-bold">All Events</a>
              </li>
              <li className="mb-4">
                <a href="/media" className="hover:text-zinc-300 text-gray-400 dark:text-gray-600 hover:dark:text-zinc-800 font-bold">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t-2 border-gray-700 pt-4">
        <p className="ml-8 text-gray-400 dark:text-gray-600 font-bold">© 2024 FutureMD INC, All Rights Reserved</p>
      </div>
    </footer>
  );
};
