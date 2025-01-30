import React, { useState } from 'react';
import about from '../assets/about.jpg';
import { faq } from '.';

const About = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleToggle = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id='about' className='bg-white mt-[550px]'>
      <div className='container grid md:grid-cols-2 gap-10 items-start justify-between w-full'>
        <div>
          <img src={about} alt='About Us' className='w-[100%] object-cover' />
        </div>
        <div>
          {faq.map(({ id, question, ansTitle, ans }) => (
            <div key={id}>
              <h4
                onClick={() => handleToggle(id)}
                className={`bg-black p-2 text-white mb-3 cursor-pointer hover:opacity-50  ${
                  openFAQ === id ? 'opacity-50' : ''
                }`}>
                {question}
              </h4>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openFAQ === id ? 'max-h-[500px] ' : 'max-h-0 overflow-hidden'
                }`}>
                <h3 className='text-gray-900 text-2xl pb-2'>{ansTitle}</h3>
                <p>{ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
