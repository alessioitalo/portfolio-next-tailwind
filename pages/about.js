import React from 'react';
import Arrow from '../components/Arrow';
import Skills from '../components/Skills';

const about = () => {
  return (
    <div className='snap-y snap-mandatory overflow-scroll w-full h-screen no-scrollbar'>
      <section className='snap-start'>
        <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='relative bottom-20 text-4xl md:text-7xl lg:text-9xl uppercase font-bold text-orange-600'>
            about me
          </h1>
          <Arrow />
        </div>
      </section>
      <section className='w-full h-screen snap-start flex flex-col justify-around text-md lg:text-lg'>
        <div className='text-center px-5 sm:px-8 md-px-10'>
          I am a web developer based in London, UK. I am proficient in HTML,
          CSS, Vanilla JavaScript and Python. I am comfortable working with
          modern libraries like React and I have a basic understanding of
          backend frameworks like Flask and Express.
        </div>

        <div className='text-center px-5 sm:px-8 md-px-10'>
          <h1 className='font-bold text-2xl'>How did I get here?</h1>I am 100%
          self-taught. I spent countless hours on the best learning resources
          the web has to offer. There&apos;s actually a solid chance I am
          learning something new in this very moment. I love writing tidy, clean
          and reusable code and I enjoy re-creating pixel-perfect designs.
        </div>
      </section>
      <section className='w-full h-screen snap-start flex flex-col justify-around text-md lg:text-lg'>
        <div className='text-center'>
          <h1 className='font-bold text-2xl'>Get to know me</h1>I have over 10
          years of professional experience and a huge set of transferable skills
          I gained by working in customer-driven environments. I love working as
          a part of a team and I get along very well with people. As you&apos;d
          expect from an Italian national, I make great pizzas too.
        </div>
        <div>
          <div className='text-center'>
            <h1 className='font-bold text-2xl'>Tools under my belt</h1>
            {/* <Skills /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
