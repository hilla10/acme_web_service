import React from 'react';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='bg-gray-700 p-15 hover:opacity-60 mb-10'>
        <h1 className='text-2xl font-light pb-4 text-white text-center'>
          Get In Touch
        </h1>
        <p className='text-center text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta
          sapiente qui, rem culpa eos libero aspernatur animi cupiditate ex
          ratione
        </p>
      </div>

      <form className='container drop-shadow-lg shadow-black'>
        <h2 className='bg-gray-700 text-white text-2xl p-4'>Contact Us</h2>
        <div className='bg-white p-4 w-full'>
          <div className='pb-5'>
            <label>Name</label>
            <input
              type='text'
              className='border-b-2 border-b-gray-400 outline-none bg-transparent w-full focus:border-2 focus:border-gray-900 p-2 focus:rounded-md'
            />
          </div>

          <div className='pb-5'>
            <label>Email</label>
            <input
              type='email'
              className='border-b-2 border-b-gray-400 outline-none bg-transparent w-full focus:border-2 focus:border-gray-900 p-2 focus:rounded-md'
            />
          </div>
          <div className='pb-5'>
            <label>Message</label>
            <textarea className='border-2 border-gray-400 outline-none bg-transparent w-full h-30 mt-4  focus:border-gray-900 p-2 focus:rounded-md'></textarea>
          </div>

          <button className='hover:bg-gray-400 cursor-pointer py-3 px-4'>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
