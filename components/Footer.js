import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-col text-center justify-center items-center font-ubuntu text-xs bg-stone-300 dark:bg-slate-900 py-2'>
      <div className='uppercase font-bold pb-2'>© Alessio Italo Jr. D'Alise {new Date().getFullYear()}</div>
      <div>
        This Portfolio is a constant work in progress and I will keep updating
        it as I create new projects and I learn new cool stuff.
      </div>
      <div>Come back soon!</div>
      <a href='#top' className='uppercase font-bold pt-2'>Back to Top</a>
    </footer>
  );
};

export default Footer;
