// import { useEffect, useState } from 'react';
import Link from 'next/link';

const MobileNav = ({ setShowMobile }) => {
  return (
    <>
      <div className='absolute top-20 left-0 w-screen h-[30vh] bg-orange-100 text-slate-800'>
        <ul>
          <li
            className='mx-5'
            onClick={() => {
              setShowMobile(false);
            }}
          >
            <Link href='/'>Home</Link>
          </li>
          <li
            className='mx-5'
            onClick={() => {
              setShowMobile(false);
            }}
          >
            <Link href='/work'>Portfolio</Link>
          </li>
          <li
            className='mx-5'
            onClick={() => {
              setShowMobile(false);
            }}
          >
            <Link href='/about'>About</Link>
          </li>
          <li
            className='mx-5'
            onClick={() => {
              setShowMobile(false);
            }}
          >
            <Link href='/contact'>Contact Me</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
