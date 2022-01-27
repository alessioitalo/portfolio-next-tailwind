import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    // <header>
    <nav className='text-orange-600 py-5 font-ubuntu'>
      <ul className='hidden md:flex justify-self-center text-xl justify-center uppercase text-orange-600'>
        <li className='mx-5'>
          <Link href='/'>Home</Link>
          {router.pathname === '/' && (
            <div className='bg-orange-600 w-full h-1 activeLink' />
          )}
        </li>
        <li className='mx-5'>
          <Link href='/work'>Portfolio</Link>
          {router.pathname === '/work' && (
            <div className='bg-orange-600 w-full h-1 activeLink' />
          )}
        </li>
        <li className='mx-5'>
          <Link href='/about'>About</Link>
          {router.pathname === '/about' && (
            <div className='bg-orange-600 w-full h-1 activeLink' />
          )}
        </li>
        <li className='mx-5'>
          <Link href='/contact'>Contact Me</Link>
          {router.pathname === '/contact' && (
            <div className='bg-orange-600 w-full h-1 activeLink' />
          )}
        </li>
      </ul>
    </nav>
    // </header>
  );
};

export default Navbar;
