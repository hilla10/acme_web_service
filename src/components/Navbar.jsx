import React, { useEffect, useState } from 'react';
import { navLink } from '.';
import { BiMenu } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';

const Navbar = () => {
  const width = window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(width);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const screenSize = () => {
      setWindowWidth(width);

      if (width > 768) {
        setMobileMenu(false);
      }
    };

    window.addEventListener('resize', screenSize);

    return () => {
      window.removeEventListener('resize', screenSize);
    };
  }, [windowWidth]);

  return (
    <nav className='container flex justify-between items-center bg-black '>
      <h1 className='text-white text-xl py-3'>Acme Web Services</h1>

      <ul
        className={`fixed bg-black z-20 top-13 md:static md:bg-transparent right-0 w-80 h-screen md:h-auto 
        transition-transform duration-500 ease-in-out md:flex justify-center gap-4 ${
          mobileMenu ? 'translate-x-0' : 'translate-x-full md:translate-x-0 '
        }`}>
        {navLink.map(({ id, title, link }) => (
          <li
            onClick={() => setMobileMenu((prev) => !prev)}
            key={id}
            className='text-white cursor-pointer hover:bg-red-500 p-3 text-center'>
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>
      <div
        className='cursor-pointer md:hidden'
        onClick={() => setMobileMenu((prev) => !prev)}>
        {mobileMenu ? (
          <RiCloseFill color='#fff' size={30} />
        ) : (
          <BiMenu color='#fff' size={30} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
