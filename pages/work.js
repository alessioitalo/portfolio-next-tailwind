import React from 'react';
import Arrow from '../components/Arrow';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import Image from 'next/image';

export async function getStaticProps() {
  let items = [];
  const querySnapshot = await getDocs(collection(db, 'projects'));
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, data: doc.data() });
  });

  return {
    props: { items }, // will be passed to the page component as props
  };
}

const work = ({ items }) => {
  return (
    <>
      <section className='h-screen'>
        <div className='flex flex-col justify-center items-center h-screen'>
          <h1 className='relative bottom-20 text-4xl md:text-7xl lg:text-9xl uppercase font-bold '>
            my work
          </h1>
          <Arrow />
        </div>
      </section>

      {items.map((item) => (
        <section
          key={item.id}
          className='sm:py-36 md:py-20 snap-start w-full h-full font-ubuntu font-bold text-center'
        >
          <h1 className='text-slate-800 dark:text-stone-50 opacity-20 py-10 md:py-1 text-3xl md:text-6xl lg:text-9xl uppercase font-bold '>
            {item.data.name}
          </h1>
          <div className='w-[90vw] h-[25vh] relative mx-auto fill-current'>
            <Image
              src={item.data.img}
              layout='responsive'
              layout='fill'
              objectFit='cover'
              className='rounded'
            />
          </div>
          <p className='p-10 md:px10 md:px-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href={item.data.source}>Source code</a>
          <a href={item.data.live}>Live App</a>
        </section>
      ))}
    </>
  );
};

export default work;
