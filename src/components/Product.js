import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { GlobalState } from '../ContextAPI'

const Product = () => {

    const{displayProduct} = GlobalState();
  
    return (
        <>
            {displayProduct?.length > 0 && displayProduct.map((prod,i)=>{
                return(
                    <ProductList {...prod} key={prod.id}/>
                )
            })}
        </>
    )
}

export default Product