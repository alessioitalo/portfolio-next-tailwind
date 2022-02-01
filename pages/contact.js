import { useState } from 'react';
import emailjs from 'emailjs-com';
import FullScreenWrapper from '../components/FullScreenWrapper';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';

const contact = () => {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const USER_ID = process.env.NEXT_PUBLIC_USER_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  const [error, setError] = useState(true);
  const [success, setSuccess] = useState(true);
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

  const formSubmitHandler = (e) => {
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
      .then((result) => {
        console.log(result);
        setLoading(false);
        setFormData({ name: '', email: '', message: '' });
        setSuccess(true);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
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
          <div className='flex flex-col justify-center items-center h-1/2 pt-24'>
            <h1 className='uppercase text-3xl md:text-6xl font-bold text-orange-600 text-center w-full'>
              get in touch
            </h1>
            <p className='font-ubuntu font-bold py-4 text-center text-slate-700 dark:text-stone-50'>
              Would love to hear from you: I am open to collaboration, freelance
              work and feedbacks.
            </p>
            <form
              className='flex flex-col w-full md:w-1/2 relative mx-auto font-bold'
              onSubmit={formSubmitHandler}
            >
              {success && <Success setSuccess={setSuccess} />}
              {error && <Error setError={setError} />}

              <label htmlFor='name' className='uppercase font-bold'>
                Your Name*
              </label>
              <input
                className='font-bold mt-2 mb-5 text-orange-600 rounded bg-transparent outline outline-1 py-1 px-4 outline-orange-600 focus:outline-4'
                name='name'
                type='text'
                value={formData.name}
                onChange={inputChangeHandler}
                required
              />
              <label htmlFor='email' className='uppercase font-bold'>
                Your Email*
              </label>
              <input
                className='font-bold mt-2 mb-5 text-orange-600 rounded bg-transparent outline outline-1 py-1 px-4 outline-orange-600 focus:outline-4'
                name='email'
                type='email'
                value={formData.email}
                onChange={inputChangeHandler}
                required
              />
              <label htmlFor='message' className='uppercase font-bold'>
                Your Message*
              </label>
              <textarea
                className='font-bold mt-2 mb-5 text-orange-600 rounded bg-transparent outline outline-1 py-1 px-4 outline-orange-600 focus:outline-4'
                rows='4'
                name='message'
                value={formData.message}
                onChange={inputChangeHandler}
                required
              ></textarea>
              <button className='bg-orange-600 text-lg rounded py-2 text-white uppercase'>
                Send
              </button>
            </form>
          </div>
        </FullScreenWrapper>
      </div>
    </>
  );
};

export default contact;
