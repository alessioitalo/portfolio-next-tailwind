import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';

const writer = (
  <Typewriter
    options={{
      strings: [
        'Web Development',
        'React',
        'Python',
        'learning new cool stuff',
        'Next JS',
        'responsive designs',
      ],
      autoStart: true,
      loop: true,
    }}
  />
);

export default function Home() {
  return (
    <div>
      <div className='flex flex-col justify-around items-center h-[60vh] pt-40'>
        <h1 className='text-8xl font-bold uppercase bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
          Hi, I am Alessio
        </h1>
        <h4 className='text-2xl font-bold uppercase bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text relative bottom-10'>...And I love {writer}</h4>
      </div>  


      <div className='flex flex-col justify-around items-center'>
        <Link href='/work' passHref>
          <button className='p-4 rounded font-Roboto uppercase font-bold text-myOrange outline outline-myOrange hover:scale-110'>
            See my work
          </button>
        </Link>

        <div className='flex justify-center text-myOrange min-w-full relative top-10'>
          <a href='' className='mx-4'>
            <BsLinkedin size={50} />
          </a>
          <a href='' className='mx-4'>
            <BsGithub size={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
