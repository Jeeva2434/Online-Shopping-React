import React from 'react'
import Category from '../components/Category';
import Product from '../components/Product';

const Home = () => {
  return (
   <article>
      <section>
          <div className='categoryList my-2 mx-4 py-2'>
            <Category/>
          </div>
          
          <div className='container d-flex flex-wrap justify-content-around justify-content-md-start p-sm-0 mx-auto my-3 my-md-5 product_card'>
            <Product/>
          </div>
      </section>
   </article>
  )
}

export default Home