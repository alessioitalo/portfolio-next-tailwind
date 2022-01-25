import { useState } from 'react';
import emailjs from 'emailjs-com';
import Arrow from '../components/Arrow';

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
    e.preventDefault()
    console.log(formData)
  };

  return (
    <div className='snap-y snap-mandatory overflow-scroll w-full h-screen no-scrollbar text-slate-700 dark:text-white'>
      <section className='w-full h-screen snap-start'>
        <div className='flex flex-col justify-center items-center h-screen'>
          <h1 className='relative bottom-20 text-4xl md:text-7xl lg:text-9xl uppercase font-bold bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
            contact me
          </h1>
          <Arrow />
        </div>
      </section>
      <section className='w-full h-screen snap-start flex flex-col justify-around items-center text-md lg:text-lg bg-gradient-to-b from-stone-50 to-stone-300 dark:from-darkBgTop dark:to-darkBgBottom'>
        <form className='flex flex-col w-[80vw] md:w-[60vw]' onSubmit={formSubmitHandler}>
          <label htmlFor='name'>Your Name*</label>
          <input
            className='mt-2 mb-5 text-myOrange rounded bg-transparent outline outline-1 py-1 px-4 outline-myOrange focus:outline-4'
            name='name'
            type='text'
            value={formData.name}
            onChange={inputChangeHandler}
            required
          />
          <label htmlFor='email'>Your Email*</label>
          <input
            className='mt-2 mb-5 text-myOrange rounded bg-transparent outline outline-1 py-1 px-4 outline-myOrange focus:outline-4'
            name='email'
            type='email'
            value={formData.email}
            onChange={inputChangeHandler}
            required
          />
          <label htmlFor='message'>Your Message*</label>
          <textarea
            className='mt-2 mb-5 text-myOrange rounded bg-transparent outline outline-1 py-1 px-4 outline-myOrange focus:outline-4'
            rows='14'
            name='message'
            value={formData.message}
            onChange={inputChangeHandler}
            required
          ></textarea>
          <button className=' bg-gradient-to-b from-myOrange to-slate-700 rounded py-2 text-white uppercase'>
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default contact;
