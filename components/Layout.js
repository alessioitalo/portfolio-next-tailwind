import React, { useState } from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from 'react-icons/bs';
import MobileNavbar from './MobileNavbar';
import Loading from './Loading';

const Layout = ({ loading, children }) => {
  const { theme, setTheme } = useTheme();

  const [showMobile, setShowMobile] = useState(false);

  const themeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const themeSwitch =
    theme === 'dark' ? (
      <BsFillLightbulbFill
        onClick={themeHandler}
        className='cursor-pointer fixed top-5 left-5'
        size={30}
      />
    ) : (
      <BsFillLightbulbOffFill
        onClick={themeHandler}
        className='cursor-pointer fixed top-5 left-5'
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
      <div className='fixed inset-0 w-screen h-screen bg-stone-100 dark:bg-slate-800 bg-light dark:bg-dark bg-bottom bg-cover bg-no-repeat -z-10' />
      {loading && <Loading />}
      <main className={`text-orange-600 ${loading && 'blur-sm'}`}>
        <header className='fixed top-0 z-20 w-full '>
          {themeSwitch}
          <Navbar showMobile={showMobile} setShowMobile={setShowMobile} />
        </header>
        <MobileNavbar showMobile={showMobile} setShowMobile={setShowMobile} />

        {children}
      </main>
    </>
  );
};

export default Layout;
