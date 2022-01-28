import { useState } from 'react';
import emailjs from 'emailjs-com';
import Arrow from '../components/Arrow';
import FullScreenWrapper from '../components/FullScreenWrapper';

const contact = () => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const inputChangeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <FullScreenWrapper className='h-screen'>
        <div className='flex flex-col justify-center items-center h-screen'>
          <h1 className='relative bottom-20 text-4xl md:text-7xl lg:text-9xl uppercase font-bold '>
            contact me
          </h1>
          <Arrow />
        </div>
      </FullScreenWrapper>
      <FullScreenWrapper className='sm:py-36 md:py-20 snap-start h-full font-ubuntu font-bold text-center'>
        <form
          className='flex flex-col w-[80vw] md:w-[60vw] relative mx-auto font-bold pb-4'
          onSubmit={formSubmitHandler}
        >
          <label htmlFor='name'>Your Name*</label>
          <input
            className='font-bold mt-2 mb-5 text-orange-600 rounded bg-transparent outline outline-1 py-1 px-4 outline-orange-600 focus:outline-4'
            name='name'
            type='text'
            value={formData.name}
            onChange={inputChangeHandler}
            required
          />
          <label htmlFor='email'>Your Email*</label>
          <input
            className='font-bold mt-2 mb-5 text-orange-600 rounded bg-transparent outline outline-1 py-1 px-4 outline-orange-600 focus:outline-4'
            name='email'
            type='email'
            value={formData.email}
            onChange={inputChangeHandler}
            required
          />
          <label htmlFor='message'>Your Message*</label>
          <textarea
            className='font-bold mt-2 mb-5 text-orange-600 rounded bg-transparent outline outline-1 py-1 px-4 outline-orange-600 focus:outline-4'
            rows='14'
            name='message'
            value={formData.message}
            onChange={inputChangeHandler}
            required
          ></textarea>
          <button className='bg-orange-600 text-lg rounded py-2 text-white uppercase'>
            Send
          </button>
        </form>
      </FullScreenWrapper>
    </>
  );
};

//  <form
//           className='flex flex-col w-[80vw] md:w-[60vw]'
//           onSubmit={formSubmitHandler}
//         >
//           <label htmlFor='name'>Your Name*</label>
//           <input
//             className='mt-2 mb-5 text-orange-600 rounded bg-transparent outline outline-1 py-1 px-4 outline-orange-600 focus:outline-4'
//             name='name'
//             type='text'
//             value={formData.name}
//             onChange={inputChangeHandler}
//             required
//           />
//           <label htmlFor='email'>Your Email*</label>
//           <input
//             className='mt-2 mb-5 text-orange-600 rounded bg-transparent outline outline-1 py-1 px-4 outline-orange-600 focus:outline-4'
//             name='email'
//             type='email'
//             value={formData.email}
//             onChange={inputChangeHandler}
//             required
//           />
//           <label htmlFor='message'>Your Message*</label>
//           <textarea
//             className='mt-2 mb-5 text-orange-600 rounded bg-transparent outline outline-1 py-1 px-4 outline-orange-600 focus:outline-4'
//             rows='14'
//             name='message'
//             value={formData.message}
//             onChange={inputChangeHandler}
//             required
//           ></textarea>
//           <button className=' bg-gradient-to-b from-orange-600 to-slate-700 rounded py-2 text-white uppercase'>
//             Send
//           </button>
//         </form>

export default contact;
