import React from 'react';
// import Arrow from '../components/Arrow';
import Skills from '../components/Skills';
import FullScreenWrapper from '../components/FullScreenWrapper';
import Image from 'next/image';

const about = () => {
  return (
    <>
      <FullScreenWrapper className='h-screen'>
        <div className='flex flex-col md:flex-row justify-evenly items-center h-screen'>
          {/* <h1 className='relative bottom-20 text-4xl md:text-7xl lg:text-9xl uppercase font-bold'>
            about me
          </h1> */}
          {/* <Arrow /> */}
          <div className='md:w-[50vw] flex flex-col justify-center items-center'>
            <div className='h-52 w-52 md:h-64 md:w-64 relative rounded-full'>
              <Image
                className='rounded-full'
                src='https://firebasestorage.googleapis.com/v0/b/alessioitalo-portfolio.appspot.com/o/profile.jpg?alt=media&token=eb05e5bd-f4de-48a5-b9b4-e5350a6fc5bb'
                layout='fill'
              />
            </div>
          </div>
          <div className='md:w-[50vw] flex flex-col justify-center items-center text-slate-700 dark:text-stone-50 relative'>
            <h1 className='uppercase text-3xl md:text-6xl font-bold text-orange-600 text-center'>
              about me
            </h1>
            <p className='font-ubuntu'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div></div>
          </div>
        </div>
      </FullScreenWrapper>
      <FullScreenWrapper>
        <div className=' text-slate-700 dark:text-stone-50 font-ubuntu'>
          <h1 className='uppercase text-2xl md:text-5xl font-bold text-orange-600 text-center font-sans'>
            How did I get here?
          </h1>
          I am 100% self-taught. I spent countless hours on the best learning
          resources the web has to offer. There&apos;s actually a solid chance I
          am learning something new in this very moment. I love writing tidy,
          clean and reusable code and I enjoy re-creating pixel-perfect designs.
        </div>
        <div className=' text-slate-700 dark:text-stone-50 font-ubuntu'>
          <h1 className='uppercase text-2xl md:text-5xl font-bold text-orange-600 text-center font-sans'>
            Get to know me
          </h1>
          I have over 10 years of professional experience and a huge set of
          transferable skills I gained by working in customer-driven
          environments. I love working as a part of a team and I get along very
          well with people. As you&apos;d expect from an Italian national, I
          make great pizzas too.
        </div>
      </FullScreenWrapper>
      <FullScreenWrapper>
        <div className=' text-slate-700 dark:text-stone-50 font-ubuntu flex flex-col h-full justify-evenly'>
          <h1 className='uppercase text-2xl md:text-5xl font-bold text-orange-600 text-center font-sans'>
            Tools under my belt
          </h1>
          <Skills />
        </div>
      </FullScreenWrapper>
    </>
  );
};

export default about;
