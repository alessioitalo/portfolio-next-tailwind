import React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import ProjectPreview from '../components/ProjectPreview';
import Image from 'next/image';
import FullScreenWrapper from '../components/FullScreenWrapper';

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
    <FullScreenWrapper>
      <h1 className='uppercase text-3xl md:text-6xl font-bold text-orange-600 text-center w-full pt-24'>
        Portfolio
      </h1>
      <div className='min-h-screen pt-10 grid grid-cols-1 md:grid-cols-2 md:gap-2 xl:grid-cols-3 text-stone-50 dark:text-slate-700'>
        {items.map((item) => (
          <ProjectPreview key={item.id} project={item.data} />
        ))}
      </div>
    </FullScreenWrapper>
  );
};

export default work;
