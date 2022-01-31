
const FullScreenWrapper = ({ children }) => {
  return (
    <section className='min-h-screen flex flex-col justify-around text-md lg:text-lg py-8 px-8'>
      {children}
    </section>
  );
};

export default FullScreenWrapper;
