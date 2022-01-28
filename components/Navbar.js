import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useState } from 'react';
// import MobileNav from './MobileNav';

const Navbar = () => {
  const router = useRouter();
  // const [showMobile, setShowMobile] = useState(false);

  return (
    <nav className='text-orange-600 py-5 font-ubuntu'>
      <ul className='hidden md:flex text-xl justify-center uppercase text-orange-600'>
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
      <div className='md:hidden w-10 h-10 fixed top-6 right-5 cursor-pointer'>
        <div className='bg-orange-600 w-10 h-1'></div>
        <div className='bg-orange-600 w-10 h-1 relative top-1.5'></div>
        <div className='bg-orange-600 w-10 h-1 relative top-3'></div>
      </div>
    </nav>
  );
};

export default Navbar;
