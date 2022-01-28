// import { useEffect, useState } from 'react';
import Link from 'next/link';

const MobileNav = () => {
  return (
      <div className='fixed inset-0 w-screen h-[30vh] bg-orange-400 text-slate-800'>
        <ul>
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
            <Link href='/contact'>Contact Me</Link>
          </li>
        </ul>
      </div>
  );
};

export default MobileNav;
