import Link from 'next/link';
// import Arrow from '../components/Arrow';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-around relative min-h-screen overflow-x-hidden py-20'>
      <div className='w-[90vw]'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className='text-orange-600 uppercase font-bold text-md sm:text-xl xl:text-2xl py-1'>
            alessio italo junior D&apos;Alise
          </h4>
          <h1 className='text-orange-600 uppercase font-bold text-4xl sm:text-6xl xl:text-8xl leading-[3.5rem]'>
            frontend
            <br />
            <span className='text-5xl sm:text-7xl xl:text-9xl'>developer</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ visibility: 'hidden', x: '100vw' }}
          animate={{ visibility: 'visible', x: 0 }}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <p className='font-ubuntu text-slate-900 dark:text-stone-50 text-bold text-sm sm:text-md xl:text-xl py-2'>
            I am a self-taught web developer based in{' '}
            <span className='text-orange-600 font-bold'>London</span>, and I am
            proficient in{' '}
            <span className='text-orange-600 font-bold'>HTML</span>,{' '}
            <span className='text-orange-600 font-bold'>CSS</span>,{' '}
            <span className='text-orange-600 font-bold'>JavaScript</span> and{' '}
            <span className='text-orange-600 font-bold'>Python</span>.
          </p>
          <p className='font-ubuntu text-slate-900 dark:text-stone-50 text-bold text-sm sm:text-md xl:text-xl py-2'>
            Some of my favourite technologies are
            <span className='text-orange-600 font-bold'> React</span>,{' '}
            <span className='text-orange-600 font-bold'>NextJS</span>,{' '}
            <span className='text-orange-600 font-bold'>TailwindCSS</span>.
          </p>
          <div className='flex-flex-col py-2'>
            <div className='font-ubuntu flex flex-col justify-start py-6 text-xl sm:text-2xl xl:text-3xl md top-8 font-bold uppercase underline'>
              <Link href='/work'>
                <div className='animate-pulse'>see my work</div>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ visibility: 'hidden', x: '-100vw' }}
          animate={{ visibility: 'visible', x: 0 }}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className='flex justify-end justify-self-end'
        >
          <a
            href='https://www.linkedin.com/in/alessiodalise/'
            target='_blank'
            rel='noreferrer'
            className='mx-4 hover:scale-125'
          >
            <BsLinkedin size={40} />
          </a>
          <a
            href='https://github.com/alessioitalo'
            target='_blank'
            rel='noreferrer'
            className='mx-4 hover:scale-125'
          >
            <BsGithub size={40} />
          </a>
          <a
            href='https://twitter.com/alessioitalo'
            target='_blank'
            rel='noreferrer'
            className='mx-4 hover:scale-125'
          >
            <BsTwitter size={40} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
