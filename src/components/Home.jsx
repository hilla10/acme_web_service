import React from 'react';
import Card from './Card';
import { cardText } from '.';

const Home = () => {
  return (
    <section id='home' className='homeBg relative top-0 left-0 w-full '>
      <div className='top-0 absolute h-full right-0 w-full bg-gray-900 opacity-50 z-1' />
      <div className='container flex flex-col justify-center items-center h-full relative z-10 text-center'>
        <h1 className='text-white  text-3xl py-5'>Go AnyWhere</h1>
        <p className='text-white w-[95%] mx-auto pb-4'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          fuga aliquam provident ut cumque consectetur asperiores inventore!
          Necessitatibus, ducimus illo? Eum dolore exercitationem maxime
          quibusdam.
        </p>
        <button className='bg-red-600 opacity-75 text-white font-md text-lg p-3 cursor-pointer hover:text-black hover:bg-gray-300 transition-all duration-500'>
          Start Here
        </button>
      </div>
      {cardText.map(({ id, icon: Icon, title, desc }) => (
        <Card
          cardClass={
            id === 1 ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-800'
          }
          key={id}
          Icon={Icon}
          title={title}
          desc={desc}
        />
      ))}
    </section>
  );
};

export default Home;
