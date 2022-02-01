import { AiFillCloseCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Success = ({ setSuccess }) => {
  return (
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className='bg-green-600 text-stone-50 relative w-full h-14 flex justify-center items-center rounded p-8 my-1'
      >
        <AiFillCloseCircle
          size={20}
          className='absolute top-1 right-1 cursor-pointer'
          onClick={() => setSuccess(false)}
        />
        Your email has been sent.
      </motion.div>
  );
};

export default Success;
