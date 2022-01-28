import Link from 'next/link';
import React from 'react';

const MobileNavbar = ({ showMobile, setShowMobile }) => {
  return (
    <div
      className={`visible md:hidden font-ubuntu  text-xl w-full h-[40vh] absolute inset-0 z-10  ${
        showMobile ? 'navVisible' : 'navHidden'
      }`}
    >
      <ul className='bg-stone-200 dark:bg-slate-900 flex flex-col items-center rounded-b-lg shadow-xl text-2xl uppercase py-10'>
        <li className='py-4' onClick={()=>setShowMobile(false)}>
          <Link href='/'>Home</Link>
        </li>
        <li className='py-4' onClick={()=>setShowMobile(false)}>
          <Link href='/work'>Portfolio</Link>
        </li>
        <li className='py-4' onClick={()=>setShowMobile(false)}>
          <Link href='/about'>About</Link>
        </li>
        <li className='py-4' onClick={()=>setShowMobile(false)}>
          <Link href='/contact'>Contact me</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
