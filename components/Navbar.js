import React from 'react';
import Link from 'next/link';

const Navbar = () => {

  return (
    // <header>
      <nav className='text-myOrange mt-5'>
        <ul className='hidden md:flex justify-self-center  text-xl justify-center uppercase font-bold bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
          <li className='mx-5'>
            <Link href='/'>Home</Link>
          </li>
          <li className='mx-5'>
            <Link href='/work'>Portfolio</Link>
          </li>
          <li className='mx-5'>
            <Link href='/about'>About</Link>
          </li>
          <li className='mx-5'>
            <Link href='/contact'>Contacts</Link>
          </li>
        </ul>
      </nav>
    // </header>
  );
};

export default Navbar;
