import React from 'react';
import Arrow from '../components/Arrow';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';

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
  // console.log(items);

  return (
    <div className='snap-y snap-mandatory overflow-scroll w-full h-screen no-scrollbar'>
      <section className='w-full h-screen snap-start'>
      <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='relative bottom-20 text-4xl md:text-7xl lg:text-9xl uppercase font-bold text-orange-600'>
            my work
          </h1>
          <Arrow />
        </div>
      </section>

      {items.map((item) => (
        <section key={item.id} className='py-60 snap-start w-full h-screen '>
          {item.data.source}
        </section>
      ))}
    </div>
  );
};

export default work;
