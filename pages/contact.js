import React from 'react';
import Arrow from '../components/Arrow';

const contact = () => {
  return (
    // <section className='flex flex-col justify-around items-center'>
    //   <div className='flex flex-col justify-center items-center min-h-[100vh]'>

    //   </div>
    // </section>

    <div className='snap-y snap-mandatory overflow-scroll w-full h-screen no-scrollbar text-slate-700 dark:text-white'>
      <section class='w-full h-screen snap-start'>
        <div className='flex flex-col justify-center items-center h-screen'>
          <h1 className='relative bottom-20 text-4xl md:text-7xl lg:text-9xl uppercase font-bold bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
            contact me
          </h1>
          <Arrow />
        </div>
      </section>
      <section class='w-full h-screen snap-start flex flex-col justify-around text-md lg:text-lg bg-gradient-to-b from-stone-50 to-stone-300 dark:from-darkBgTop dark:to-darkBgBottom'>
        <form className='flex flex-col mx-10 sm:mx-60 py-10 px-20'>
          <label htmlFor='name'>Your Name*</label>
          <input name='name' type='text' required />
          <label htmlFor='email'>Your Email*</label>
          <input name='email' type='email' />
          <label htmlFor='message'>Your Message*</label>
          <textarea rows='14' name='message'></textarea>
          <button className=' bg-gradient-to-b from-myOrange to-slate-700 rounded py-2 text-white uppercase'>Send</button>
        </form>
      </section>
    </div>
  );
};

export default contact;
