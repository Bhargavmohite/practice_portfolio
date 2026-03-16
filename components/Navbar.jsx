'use client'
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md'>
      <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-3'>
          <span className='text-xl font-bold tracking-tight text-slate-900 dark:text-white'>
            Alex Rivera
          </span>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-10'>
          <Link
            href='/'
            className='text-sm font-medium hover:text-blue-500 transition-colors'
          >
            Home
          </Link>
          <Link
            href='/about'
            className='text-sm font-medium hover:text-blue-500 transition-colors'
          >
            About
          </Link>
          <Link
            href='/project'
            className='text-sm font-medium hover:text-blue-500 transition-colors'
          >
            Projects
          </Link>
          <Link
            href='/contact'
            className='text-sm font-medium hover:text-blue-500 transition-colors'
          >
            Contact
          </Link>
        </div>

        {/* Right Buttons */}
        <div className='flex items-center gap-4'>
          <button className='hidden sm:flex bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-g text-sm font-bold transition-all items-center gap-2'>
            Let's Talk
          </button>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-slate-900 dark:text-white'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className='material-symbols-outlined'>
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col gap-4 bg-white dark:bg-slate-900'>
          <Link href='/' className='text-sm font-medium hover:text-blue-500'>
            Home
          </Link>
          <Link
            href='/about'
            className='text-sm font-medium hover:text-blue-500'
          >
            About
          </Link>
          <Link
            href='/project'
            className='text-sm font-medium hover:text-blue-500'
          >
            Projects
          </Link>
          <Link
            href='/contact'
            className='text-sm font-medium hover:text-blue-500'
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
