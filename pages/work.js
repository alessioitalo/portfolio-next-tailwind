import React from 'react';
import Arrow from '../components/Arrow';

const work = () => {
  return (
    <section className='flex flex-col justify-around items-center h-screen'>
    <div className='flex flex-col justify-center items-center'>
    <h1 className='relative bottom-20 text-4xl md:text-7xl lg:text-9xl uppercase font-bold bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
        my work
      </h1>
      <Arrow/>
    </div>
  </section>
  );
};

export default work;
