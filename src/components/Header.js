import React from 'react';
import Search from './Search';

const Header = () => {
  return (
    <header className='bg-dark text-light p-3 p-md-5 d-flex flex-wrap flex-md-nowrap justify-content-between'>
      <div className='col-12 col-md-3 logo fw-bold'>Smart Store</div>
      <div className='col-12  col-md-3 text-start text-md-end my-4 my-md-0'>
        <Search/>
      </div>
   </header>
  )
}

export default Header