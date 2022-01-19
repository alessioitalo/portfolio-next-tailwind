import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='py-3'>
      <nav className='text-myOrange'>
        <ul className='flex justify-center uppercase font-bold'>
          <li className='mx-5'>
            <Link href='/'>Home</Link>
          </li>
          <li className='mx-5'>
            <Link href='/work'>Portfolio</Link>
          </li>
          <li className='mx-5'>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
