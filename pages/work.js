import React from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase.config';
import ProjectPreview from '../components/ProjectPreview';
import FullScreenWrapper from '../components/FullScreenWrapper';
import { motion } from 'framer-motion';

export async function getStaticProps() {
  let items = [];
  const q = query(collection(db, 'projects'), orderBy('index', 'asc'));
  const querySnapshot = await getDocs(q);
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
      <p className='font-ubuntu font-bold py-4 text-center text-slate-700 dark:text-stone-50'>
        Some of my latest work.
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='min-h-screen pt-10 grid grid-cols-1 md:grid-cols-2 md:gap-2 xl:grid-cols-3 text-stone-50 dark:text-slate-700'
      >
        {items.map((item) => (
          <ProjectPreview key={item.id} project={item.data} />
        ))}
      </motion.div>
    </FullScreenWrapper>
  );
};

export default work;
