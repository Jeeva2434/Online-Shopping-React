import React from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const Navbar = () => {
  return (
    <nav className='d-flex justify-content-between bg-secondary py-3 px-3 px-md-5 text-light'>
      <div className='d-flex'>
        <li className='p-2'><Link to='/'>Home</Link></li>
        <li className='p-2 ps-5'><Link to='/cart'>Cart</Link></li> 
      </div>
      <div>
        <Filter/>
      </div>
    </nav>
  )
}

export default Navbar