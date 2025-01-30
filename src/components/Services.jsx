import React from 'react';
import { services } from '.';

const Services = () => {
  return (
    <section id='services' className='mt-6 bg-white'>
      <div className='flex flex-col text-center justify-center items-center p-5 hover:opacity-60 transition-all duration-500 bg-red-500 text-white'>
        <h2 className='text-2xl md:text-3xl pb-3'>Our Services</h2>
        <p className='pb-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta
          sapiente qui, rem culpa eos libero aspernatur animi cupiditate ex
          ratione
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center w-full text-center bg-gray-100'>
        {services.map(({ id, icon: Icon, title, desc }) => (
          <div key={id} className='my-10'>
            <div className='bg-red-500 w-24 h-24  flex justify-center items-center mx-auto rounded-lg text-center '>
              <Icon color='#fff' size={64} />
            </div>
            <h3 className='text-center text-[22px] font-light py-2'>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
