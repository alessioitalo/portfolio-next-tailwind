import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center py-10'>
      <div className='text-sm'>
        Alessio Italo Jr. D&apos;Alise © {new Date().getFullYear()}
      </div>
      <div className='text-xs'>
        This Portfolio is a constant work in progress and I will keep updating
        it as I create new projects and I learn new cool stuff.
      </div>
      <div className='text-xs'>Come back soon!</div>
      <a href='#top'>Back to Top</a>
    </footer>
  );
};

export default Footer;
