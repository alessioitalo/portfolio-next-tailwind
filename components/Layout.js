import React, { useState } from 'react';
import Navbar from './Navbar';
// import Footer from './Footer';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from 'react-icons/bs';
import MobileNavbar from './MobileNavbar';

const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();

  const [showMobile, setShowMobile] = useState(false);

  const themeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const themeSwitch =
    theme === 'dark' ? (
      <BsFillLightbulbFill
        onClick={themeHandler}
        className='cursor-pointer absolute absolute mt-5 ml-5'
        size={30}
      />
    ) : (
      <BsFillLightbulbOffFill
        onClick={themeHandler}
        className='cursor-pointer absolute top-5 left-5'
        size={30}
      />
    );

  return (
    <>
      <Head>
        <title>Alessio D&apos;Alise - Software Developer</title>
        <meta
          name='description'
          content="Alessio Italo Junior D'Alise - Software Developer based in London, UK. "
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <main className='text-orange-600 bg-stone-100 dark:bg-slate-800 bg-cover bg-no-repeat h-screen relative'> */}
      <main className='text-orange-600 bg-stone-100 dark:bg-slate-800 h-screen'>
        <header className='sticky top-0 z-20 w-full '>
          {themeSwitch}
          <Navbar showMobile={showMobile} setShowMobile={setShowMobile} />
        </header>
        <MobileNavbar showMobile={showMobile} setShowMobile={setShowMobile} />

        {children}
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default Layout;
