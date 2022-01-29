import React from 'react';

const Loading = () => {
  return (
    <div className='w-full h-full bg-transparent absolute top-0 left-0 flex justify-center items-center'>
    <div className="animate-spin bg-stone-100 dark:bg-slate-800 border-8 border-stone-300 dark:border-slate-900 border-t-orange-600 dark:border-t-orange-600 rounded-full  w-20 h-20">
    </div>
</div>
  );
};

export default Loading;
