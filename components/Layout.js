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
        className='cursor-pointer fixed top-2 right-20'
        size={30}
      />
    ) : (
      <BsFillLightbulbOffFill
        onClick={themeHandler}
        className='cursor-pointer fixed top-2 right-20'
        size={30}
      />
    );

  return (
    <>
      <Head>
        <title>Alessio D&apos;Alise - Software Developer</title>
        <meta property='og:title' content="Alessio Italo Jr. D'Alise" />
        <meta property='og:url' content='www.alessioitalo.uk' />
        <meta property='og:type' content='website' />
        <meta
          name='description'
          content="Alessio Italo Junior D'Alise - Software Developer based in London, UK. "
        />
        <meta
          property='og:image'
          content='https://firebasestorage.googleapis.com/v0/b/alessioitalo-portfolio.appspot.com/o/profile.jpg?alt=media&token=eb05e5bd-f4de-48a5-b9b4-e5350a6fc5bb'
        />
        <meta name='twitter:card' content='summary' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <div className='fixed inset-0 w-screen h-screen bg-stone-100 dark:bg-slate-800 bg-light dark:bg-dark bg-bottom bg-cover bg-no-repeat -z-10' />
      {loading && <Loading />}
      <main className={`text-orange-600 ${loading && 'blur-sm h-screen'}`}>
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
