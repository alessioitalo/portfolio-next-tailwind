import React from 'react';
import Image from 'next/image';
import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaReact,
  FaGitAlt,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiVisualstudiocode,
  SiMongodb,
  SiTestinglibrary,
  SiFirebase,
} from 'react-icons/si';

const about = () => {
  return (
      <section className='flex flex-col justify-around items-center h-screen'>
        <div className='text-center'>
        <h1 className='relative bottom-40 text-4xl md:text-7xl lg:text-9xl uppercase font-bold bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
            about me
          </h1>
        </div>
      </section>

    //   <div className='flex flex-col justify-center items-center h-[30vh] md:h-[60vh]'>
    //     <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold uppercase bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
    //       about me
    //     </h1>
    //   </div>
    //   <div className='flex flex-col justify-center items-center'>
    //     <Image
    //       src='https://i.picsum.photos/id/338/2000/1333.jpg?hmac=-sTSfHkgHcFg1Jdut1v8HTVl9S1cyeMQ0OY_8dj30fY'
    //       alt='photo of Alessio'
    //       width={300}
    //       height={290}
    //       className='rounded-full'
    //     />
    //     <div className='w-[80vw] md:w-[50vw] text-center'>
    //       I am a web developer based in London, UK. I am proficient in HTML,
    //       CSS, Vanilla JavaScript and Python. I am comfortable working with
    //       modern libraries like React and I have a basic understanding of
    //       backend frameworks like Flask and Express.
    //     </div>
    //     <h1 className='text-5xl md:text-7xl lg:text-9xl text-center font-bold text-white opacity-100 dark:text-slate-600 dark:opacity-50'>
    //       How did I get here?
    //     </h1>
    //     <div className='w-[80vw] md:w-[50vw] text-center'>
    //       I am 100% self-taught. I spent countless hours on the best learning
    //       resources the web has to offer. There&apos;s actually a solid chance I
    //       am learning something new in this very moment. I love writing tidy,
    //       clean and reusable code and I enjoy re-creating pixel-perfect designs.
    //     </div>
    //     <h1 className='text-5xl md:text-7xl lg:text-9xl text-center font-bold text-white opacity-100  dark:text-slate-600 dark:opacity-50'>
    //       Get to know me
    //     </h1>
    //     <div className='w-[80vw] md:w-[50vw] text-center'>
    //       I have over 10 years of professional experience and a huge set of
    //       transferable skills I gained by working in customer-driven
    //       environments. I love working as a part of a team and I get along very
    //       well with people. As you&apos;d expect from an Italian national, I
    //       make great pizzas too.
    //     </div>
    //     <h1 className='text-5xl md:text-7xl lg:text-9xl text-center font-bold text-white opacity-100 dark:text-slate-600 dark:opacity-50'>
    //       Tools under my belt
    //     </h1>
    //     {/* <div className='grid grid-cols-5 grid-rows-3 gap-10'>
    //       <div className='flex flex-col items-center'>
    //         <FaHtml5 size={50} />
    //         <span>HTML</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <FaCss3 size={50} />
    //         <span>CSS</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <SiJavascript size={50} />
    //         <span>JavaScript</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <SiTypescript size={50} />
    //         <span>TypeScript</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <FaPython size={50} />
    //         <span>Python</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <FaGitAlt size={50} />
    //         <span>Git</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <FaReact size={50} />
    //         <span>React</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <SiRedux size={50} />
    //         <span>Redux</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <SiTestinglibrary size={50} />
    //         <span>React Testing Library</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <FaBootstrap size={50} />
    //         <span>Bootstrap</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <SiTailwindcss size={50} />
    //         <span>Tailwind CSS</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <SiStyledcomponents size={50} />
    //         <span>Styled Components</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <SiFirebase size={50} />
    //         <span>Firebase</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <SiMongodb size={50} />
    //         <span>MongoDB</span>
    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <SiVisualstudiocode size={50} />
    //         <span>VS Code</span>
    //       </div>
    //     </div> */}
    //   </div>
    // </>
  );
};

export default about;
