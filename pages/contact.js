import { useState } from 'react';
import emailjs from 'emailjs-com';
import FullScreenWrapper from '../components/FullScreenWrapper';
import Loading from '../components/Loading';

const contact = () => {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const USER_ID = process.env.NEXT_PUBLIC_USER_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        USER_ID
      )
      .then(
        (result) => {
          setLoading(false);
          console.log(result);
        },
        (error) => {
          setLoading(false);
          setError(true);
          console.log(error);
        }
      );
  };

  return (
    <>
      {loading && <Loading />}

      <div
        className={`${
          loading && 'fixed top-0 left-0 w-screen h-screen blur-sm z-100'
        }`}
      >
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
      </div>
    </>
  );
};

export default contact;
