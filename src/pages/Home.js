import React, { useEffect, useState } from 'react'

const Home = () => {

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    const fetchData =  async() => {
      try{
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(JSON.stringify(data,null,2));
        setProducts(data.products);
      }catch(err){
        console.log(err);
      }
    } 
    fetchData();   
  },[]);

  return (
   <article>
      <section>
          {products.length > 0 && products.map((prod,i)=>{
            return(
              <div className='items_details'>
                {prod.category}
              </div>
            )
          })}
      </section>
   </article>
  )
}

export default Home