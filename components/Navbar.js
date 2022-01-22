import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter()
  return (
    // <header>
      <nav className='text-myOrange py-5'>
        <ul className='hidden md:flex justify-self-center  text-xl justify-center uppercase font-bold bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
          <li className={`mx-5 ${router.pathname === '/' && 'bg-myOrange'}`}>
            <Link href='/'>Home</Link>
          </li>
          <li className={`mx-5 ${router.pathname === '/work' && 'bg-myOrange'}`}>
            <Link href='/work'>Portfolio</Link>
          </li>
          <li className={`mx-5 ${router.pathname === '/about' && 'bg-myOrange'}`}>
            <Link href='/about'>About</Link>
          </li>
          <li className={`mx-5 ${router.pathname === '/contact' && 'bg-myOrange'}`}>
            <Link href='/contact'>Contact Me</Link>
          </li>
        </ul>
      </nav>
    // </header>
  );
};

export default Navbar;
