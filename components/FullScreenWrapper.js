
const FullScreenWrapper = ({ children }) => {
  return (
    <section className='h-screen flex flex-col justify-around text-md lg:text-lg'>
      {children}
    </section>
  );
};

export default FullScreenWrapper;
