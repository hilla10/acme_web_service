import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-black text-center p-10 mt-8'>
      <p className='text-white'>
        ACME Web Services © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
