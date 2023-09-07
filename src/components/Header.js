import React from 'react';
import Search from './Search';

const Header = () => {
  return (
    <header className='bg-dark text-light p-5 d-flex justify-content-between'>
    <div className='logo fw-bold'>Smart Store</div>
    <div>
      <Search/>
    </div>
   </header>
  )
}

export default Header