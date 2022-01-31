
const FullScreenWrapper = ({ children }) => {
  return (
    <section className='h-screen flex flex-col justify-around text-md lg:text-lg px-8'>
      {children}
    </section>
  );
};

export default FullScreenWrapper;
