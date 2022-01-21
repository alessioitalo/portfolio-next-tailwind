// import Link from 'next/link';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';

const writer = (
  <Typewriter
    options={{
      strings: [
        'Web Development.',
        'React.',
        'Python.',
        'learning new cool stuff.',
        'Next JS.',
        'responsive designs.',
      ],
      autoStart: true,
      loop: true,
    }}
  />
);

export default function Home() {
  return (
    <>
      <section className='flex flex-col justify-around items-center h-screen'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-7xl lg:text-9xl uppercase font-bold bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
            Hi, I am Alessio
          </h1>
          <h2 className='text-lg md:text-3xl lg:text-4xl font-bold bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
            {' '}
            ...and I love {writer}
          </h2>
        </div>

        <div className='flex'>
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
      </section>
      {/* <div className='flex flex-col justify-around items-center h-[100vh] pt-40'>
        <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold uppercase bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
          Hi, I am Alessio
        </h1>
        <h4 className='text:lg md:text-2xl py-3 font-bold bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
          ...and I love {writer}
        </h4>
      </div>

      <div className='flex flex-col justify-around items-center'>

        <div className='flex justify-center text-myOrange min-w-full py-10'>
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
          <a href='https://twitter.com/alessioitalo'
            target='_blank'
            rel='noreferrer'
            className='mx-4 hover:scale-125'>
            <BsTwitter size={50} />
          </a>
        </div> */}
      {/* <Link href='/work' passHref>
          <div className='p-3 outline outline-myOrange bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text rounded font-Roboto uppercase font-bold hover:scale-125 cursor-pointer'>
            See my work 
          </div>
        </Link> */}
    </>
  );
}
