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
      <div className='flex flex-col justify-around items-center h-[60vh] pt-40'>
        <h1 className='text-8xl font-bold uppercase bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
          Hi, I am Alessio
        </h1>
        <h4 className='text-2xl font-bold bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text relative bottom-10'>
          ...and I love {writer}
        </h4>
      </div>

      <div className='flex flex-col justify-around items-center'>

        <div className='flex justify-center text-myOrange min-w-full'>
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
        </div>
        {/* <Link href='/work' passHref>
          <div className='p-3 outline outline-myOrange bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text rounded font-Roboto uppercase font-bold hover:scale-125 cursor-pointer'>
            See my work 
          </div>
        </Link> */}

      </div>
    </>
  );
}
