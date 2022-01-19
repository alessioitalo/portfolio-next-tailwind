import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { useTheme } from 'next-themes';

const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();

  const themeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Head>
        <title>Alessio D&apos;Alise - Software Developer</title>
        <meta name='description' content="Alessio Italo Junior D'Alise - Software Developer based in London, UK. "/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-gradient-to-b from-stone-200 dark:from-darkBgTop'>
        <Navbar theme={theme} themeHandler={themeHandler} />
        <section className='min-h-screen font-Roboto flex flex-col'>
          {children}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
