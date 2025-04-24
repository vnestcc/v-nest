'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items
  const navigation = [
    { title: "About Us", path: "#" },
    { title: "Our Startups", path: "#" },
    { title: "Steps to Apply", path: "#" },
    { title: "FAQs", path: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-evenly px-8 py-4 bg-transparent">
        <div className="flex items-center gap-4">
          <Image src="/v-nest-logo.svg" alt="V-NEST Logo" width={129} height={85} />
        </div>

        <div className="flex-1 flex justify-center">
          <nav className="flex items-center gap-8 bg-[#2a003f]/30 px-8 py-3 rounded-2xl backdrop-blur-md shadow-md border border-purple-500/30 h-[4.375rem]">
            {navigation.map((item, index) => (
              <Link 
                key={index} 
                href={item.path} 
                className="text-white text-lg hover:text-violet-300 transition"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <Link href="#">
            <button className="bg-gradient-to-r from-purple-700 to-violet-600 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-purple-500/50 border border-violet-400 h-14 transform hover:-translate-y-1">
              SOLVE-A-THON
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-4">
        <Link href="#">
          <h1 className="text-2xl text-white font-semibold">LOGO</h1>
        </Link>
        <button
          className="menu-btn text-violet-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute z-20 top-16 inset-x-0 bg-[#2a003f] rounded-xl mx-2 mt-2 p-4 shadow-lg border border-purple-800/30">
          <ul className="space-y-4">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-white/90 hover:text-violet-300">
                <Link href={item.path} className="block py-2">
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="#">
                <button className="w-full py-2 px-4 text-white font-medium bg-purple-700 hover:bg-purple-600 active:bg-purple-800 duration-150 rounded-full border border-violet-400 flex items-center justify-center">
                  SOLVE-A-THON
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;