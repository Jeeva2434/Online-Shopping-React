import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { GlobalState } from '../ContextAPI'

const Product = () => {

    const{displayProduct,setDisplayProduct,filterOpt} = GlobalState();

    if(displayProduct?.length===0){
        return(
            <div className='fw-normal fs-1 bg-warning p-5 mx-auto'>
                Strike out! no such product is available ...
            </div>
        )
    }

    let filterProduct = []

    if(filterOpt.sort==='asc'){
        filterProduct = (displayProduct.sort(function(a,b){return parseInt(b.price) - parseInt(a.price)}))
    }
    else if(filterOpt.sort==='desc'){
        filterProduct = (displayProduct.sort(function(a,b){return parseInt(a.price) - parseInt(b.price)}))
    }
    else{
        filterProduct = displayProduct;
    }
    

  
    return (
        <>
            {filterProduct?.length > 0 && filterProduct.map((prod,i)=>{
                return(
                    <ProductList {...prod} key={prod.id}/>
                )
            })}
        </>
    )
}

export default Product