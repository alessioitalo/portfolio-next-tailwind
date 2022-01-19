import React from 'react';
import Link from 'next/link';
// import { FaLightbulb } from 'react-icons/fa';
// import { FaLightbulbSlash } from 'react-icons/fa';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { BsFillLightbulbOffFill } from 'react-icons/bs';

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
    <header className='py-3'>
      <nav className='text-myOrange'>
        {themeSwitch}
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
