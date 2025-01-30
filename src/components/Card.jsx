import React from 'react';

const Card = ({ cardClass, Icon, title, desc }) => {
  return (
    <div
      className={`${
        cardClass ? cardClass : ''
      } flex flex-col text-center justify-center items-center p-5 hover:opacity-60 transition-all duration-500`}>
      <Icon size={80} className='m-4' />
      <h2 className='text-2xl md:text-3xl pb-3'>{title}</h2>
      <p className='pb-3'>{desc}</p>
    </div>
  );
};

export default Card;
