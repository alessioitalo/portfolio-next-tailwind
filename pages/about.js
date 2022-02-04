import { useEffect } from 'react';
import Skills from '../components/Skills';
import FullScreenWrapper from '../components/FullScreenWrapper';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const about = () => {
  const [thirdBlockRef, thirdBlockInView] = useInView();
  const [fourthBlockRef, fourthBlockInView] = useInView();
  const [fifthBlockRef, fifthBlockInView] = useInView();

  const thirdBlockAnimation = useAnimation();
  const fourthBlockAnimation = useAnimation();
  const fifthBlockAnimation = useAnimation();

  useEffect(() => {
    if (thirdBlockInView) {
      thirdBlockAnimation.start({
        opacity: 1,
        transition: {
          delay: 0.3,
          transition: 0.3,
        },
      });
    }
  }, [thirdBlockInView]);

  useEffect(() => {
    if (fourthBlockInView) {
      fourthBlockAnimation.start({
        opacity: 1,
        transition: {
          delay: 0.5,
          transition: 0.3,
        },
      });
    }
  }, [fourthBlockInView]);

  useEffect(() => {
    if (fifthBlockInView) {
      fifthBlockAnimation.start({
        opacity: 1,
        transition: {
          delay: 0.5,
          transition: 0.3,
        },
      });
    }
  }, [fifthBlockInView]);

  return (
    <>
      <FullScreenWrapper>
        <section className='flex flex-col md:flex-row justify-evenly items-center min-h-screen py-20 overflow-x-hidden'>
          {/* FIRST ANIMATED BLOCK */}
          <motion.div
            initial={{ visibility: 'hidden', x: '100vw' }}
            animate={{ visibility: 'visible', x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='md:w-[50vw] flex flex-col justify-center items-center'
          >
            <div className='h-52 w-52 md:h-64 md:w-64 rounded-full absolute -translate-x-8 bg-stone-200 dark:bg-slate-700'></div>
            <div className='h-52 w-52 md:h-64 md:w-64 relative rounded-full'>
              <Image
                className='rounded-full'
                src='https://firebasestorage.googleapis.com/v0/b/alessioitalo-portfolio.appspot.com/o/profile.jpg?alt=media&token=eb05e5bd-f4de-48a5-b9b4-e5350a6fc5bb'
                layout='fill'
                priority={true}
              />
            </div>
          </motion.div>

          {/* SECOND ANIMATED BLOCK */}
          <motion.div
            initial={{ visibility: 'hidden', x: '-100vw' }}
            animate={{ visibility: 'visible', x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='md:w-[50vw] flex flex-col justify-center items-center text-slate-700 dark:text-stone-50 relative md:pr-24'
          >
            <h1 className='uppercase text-3xl md:text-6xl font-bold text-orange-600 text-center'>
              about me
            </h1>
            <p className='font-ubuntu font-bold py-4'>
              I am a self-taught frontend developer who loves building beautiful
              web applications.
            </p>
            <p className='font-ubuntu font-bold py-4'>
              I have strong HTML, CSS, Python and modern JavaScript(ES6)
              fundamentals, extensive experience with React/NextJs and I am
              familiar with Version Control (Git-GitHub) and Content Management
              systems (Contentful).
            </p>
            <div></div>
          </motion.div>
        </section>
      </FullScreenWrapper>

      <FullScreenWrapper>
        {/* THIRD ANIMATED BLOCK */}
        <motion.div
          ref={thirdBlockRef}
          initial={{ opacity: 0 }}
          animate={thirdBlockAnimation}
          className=' text-slate-700 dark:text-stone-50 font-ubuntu relative md:text-left'
        >
          <div className='h-[60vw] w-[60vw] md:h-72 md:w-72 rounded-full absolute -translate-x-8 -translate-y-8 md:translate-x-24 bg-stone-200 dark:bg-slate-700 -z-10'></div>
          <h1 className='uppercase text-2xl md:text-5xl font-bold text-orange-600 font-sans text-center md:text-left'>
            How did I get here?
          </h1>
          <p className='font-ubuntu font-bold py-4'>
            I spent countless hours on the best learning resources the web has
            to offer.
          </p>
          <p className='font-ubuntu font-bold py-4'>
            I love writing tidy, clean and reusable code and I enjoy re-creating
            pixel-perfect designs.
          </p>
        </motion.div>
        <motion.div
          ref={fourthBlockRef}
          initial={{ opacity: 0 }}
          animate={fourthBlockAnimation}
          className=' text-slate-700 dark:text-stone-50 font-ubuntu relative md:text-right'
        >
          <div className='h-[60vw] w-[60vw] md:h-72 md:w-72 rounded-full absolute right-0 translate-x-4 md:-translate-x-24 -translate-y-8 bg-stone-200 dark:bg-slate-700 -z-10'></div>
          <h1 className='uppercase text-2xl md:text-5xl font-bold text-orange-600 font-sans text-center md:text-right'>
            Get to know me
          </h1>
          <p className='font-ubuntu font-bold py-4'>
            I have over 10 years of professional experience and a huge set of
            transferable skills I gained by working in customer-driven
            environments. I love working as a part of a team and I get along
            very well with people.
          </p>
          <p className='font-ubuntu font-bold py-4'>
            {' '}
            As you&apos;d expect from an Italian national, I make great pizzas
            too.
          </p>
        </motion.div>
      </FullScreenWrapper>
      <FullScreenWrapper>
        {/* FIFTH BLOCK ANIMATION */}
        <motion.div
          ref={fifthBlockRef}
          initial={{ opacity: 0}}
          animate={fifthBlockAnimation}
          className=' text-slate-700 dark:text-stone-50 font-ubuntu flex flex-col h-full justify-evenly'
        >
          <h1 className='uppercase text-2xl md:text-5xl font-bold text-orange-600 text-center font-sans'>
            Tools under my belt
          </h1>
          <Skills />
        </motion.div>
      </FullScreenWrapper>
    </>
  );
};

export default about;
