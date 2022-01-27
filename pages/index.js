import Link from 'next/link';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function Home() {
  return (
    <section className='flex flex-col justify-center items-center mt-12 relative z-1'>
      <div className='w-[90vw]'>
        <h4 className='text-orange-600 uppercase font-bold text-md sm:text-xl xl:text-2xl py-1'>
          alessio italo junior D&apos;Alise
        </h4>
        <h1 className='text-orange-600 uppercase font-bold text-4xl sm:text-6xl xl:text-8xl leading-[3.5rem]'>
          frontend
          <br />
          <span className='text-5xl sm:text-7xl xl:text-9xl'>developer</span>
        </h1>
        <p className='font-ubuntu text-slate-900 dark:text-stone-50 text-bold text-sm sm:text-md xl:text-xl py-4'>
          I am a self-taught web developer based in{' '}
          <span className='text-orange-600 font-bold'>London</span>, and I am
          proficient in <span className='text-orange-600 font-bold'>HTML</span>,{' '}
          <span className='text-orange-600 font-bold'>CSS</span>,{' '}
          <span className='text-orange-600 font-bold'>JavaScript</span> and{' '}
          <span className='text-orange-600 font-bold'>Python</span>.
        </p>
        <p className='font-ubuntu text-slate-900 dark:text-stone-50 text-bold text-sm sm:text-md xl:text-xl py-4'>
          Some of my favourite technologies are
          <span className='text-orange-600 font-bold'> React</span>,{' '}
          <span className='text-orange-600 font-bold'>NextJS</span>,{' '}
          <span className='text-orange-600 font-bold'>TailwindCSS</span>.
        </p>
        <div className='flex-flex-col py-4'>
          <div className='font-ubuntu flex justify-start py-10 text-xl sm:text-2xl xl:text-3xl md top-8 font-bold uppercase underline'>
            <Link href='/work'>see my work</Link>
          </div>
        </div>

        <div className='flex justify-end py-10'>
          <a
            href='https://www.linkedin.com/in/alessiodalise/'
            target='_blank'
            rel='noreferrer'
            className='mx-4 hover:scale-125'
          >
            <BsLinkedin size={50} />
          </a>
          <a
            href='https://github.com/alessioitalo'
            target='_blank'
            rel='noreferrer'
            className='mx-4 hover:scale-125'
          >
            <BsGithub size={50} />
          </a>
          <a
            href='https://twitter.com/alessioitalo'
            target='_blank'
            rel='noreferrer'
            className='mx-4 hover:scale-125'
          >
            <BsTwitter size={50} />
          </a>
        </div>
      </div>
    </section>
  );
}
