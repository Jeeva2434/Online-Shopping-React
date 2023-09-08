import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'

const Product = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
      const fetchData =  async() => {
        try{
          const response = await fetch('https://dummyjson.com/products');
          const data = await response.json();
          // console.log(data.products);
          setProducts(data.products);
        }catch(err){
          console.log(err);
        }
      } 
      fetchData()
    },[]);
  
    return (
        <>
            {products.length > 0 && products.map((prod,i)=>{
                return(
                    <ProductList {...prod} key={prod.id}/>
                )
            })}
        </>
    )
}

export default Product