import React from 'react';
import Link from 'next/link';
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from 'react-icons/bs';

const Navbar = ({ theme, themeHandler }) => {

  const themeSwitch =
    theme === 'dark' ? (
      <BsFillLightbulbFill
        onClick={themeHandler}
        className='relative top-5 left-5 cursor-pointer'
        size={30}
      />
    ) : (
      <BsFillLightbulbOffFill
        onClick={themeHandler}
        className='relative top-5 left-5 cursor-pointer'
        size={30}
      />
    );

  return (
    <header>
      <nav className='text-myOrange'>
        {themeSwitch}
        <ul className='flex text-xl justify-center uppercase font-bold bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
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
