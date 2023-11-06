import React from 'react';

import logo from '../assets/logo.ico'

const Header = () => {
  return <header className='py-8'>

    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a  className='mix-blend-darken' href='#'> <img src={logo}  alt=''/>
         </a>
         <button className='btn btn-sm'> Work With me</button>
      </div>

    </div>
  </header>;
};

export default Header;
