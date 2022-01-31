import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Navbar = ({ showMobile, setShowMobile }) => {
  const router = useRouter();
  const [solidBg, setSolidBg] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setSolidBg(true);
    } else {
      setSolidBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => window.removeEventListener('scroll', changeNavbarColor);
  });

  return (
    <nav
    id='navbar'
      className={`text-orange-600 py-5 font-ubuntu ${
        solidBg ? 'md:bg-stone-200 md:dark:bg-slate-900' : 'transparent'
      }`}
    >
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
      <div
        className='md:hidden w-10 h-10 fixed top-6 right-5 cursor-pointer'
        onClick={() => setShowMobile((show) => !show)}
      >
        <div className={`bg-orange-600 w-10 h-1 ${showMobile && 'toX'}`}></div>
        <div
          className={`bg-orange-600 w-10 h-1 relative top-1.5 ${
            showMobile && 'toX'
          }`}
        ></div>
        <div
          className={`bg-orange-600 w-10 h-1 relative top-3 ${
            showMobile && 'toX'
          }`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
