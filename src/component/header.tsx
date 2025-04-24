'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-evenly px-8 py-4 bg-transparent">
      <div className="flex items-center gap-4">
        <Image src="/v-nest-logo.svg" alt="V-NEST Logo" width={129} height={85} />
      </div>

      <div className="flex-1 flex justify-center">
        <nav className="flex items-center gap-30 bg-white/10 px-8 py-3 rounded-2xl backdrop-blur-md shadow-md h-[4.375rem]">
          <Link href="#" className="text-white text-2xl hover:text-purple-300 transition">
            About Us
          </Link>
          <Link href="#" className="text-white text-2xl hover:text-purple-300 transition">
            Our Startups
          </Link>
          <Link href="#" className="text-white text-2xl hover:text-purple-300 transition">
            Steps to Apply
          </Link>
          <Link href="#" className="text-white text-2xl hover:text-purple-300 transition">
            FAQs
          </Link>
        </nav>
      </div>

      <div>
        <Link href="#">
          <button className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-lg shadow-md transition-colors ease-in-out duration-1000 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 h-14">
            SOLVE-A-THON
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
