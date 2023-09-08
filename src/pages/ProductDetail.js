import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Ratings from '../components/Ratings';

const ProductDetail = () => {
    const{id} = useParams();
    const[currentItem,setCurrentItem] = useState(null);
    const[quantity,setQuantity] = useState(1);

    useEffect(()=>{
      const getProductDetails = async() => {
        try{
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            // console.log(data);
            setCurrentItem(data);
        }catch(err){
            console.log(err);
        }
      }
      getProductDetails();
    },[id]);

    const count = (condition) => {
        let result = quantity;
        if(condition === 'plus'){
            if(stock <= quantity) return
            result += 1
        }else{
            if(result=== 0) return;
            result -= 1;
        }
        setQuantity(result);
    }

    const AddToCart = () => {
        let addedItem = {...currentItem,quantity:quantity}
        console.log('addded', addedItem);
    }
    
    if(!currentItem) return

    const{title,description,brand,category,images,price,discountPercentage,rating,stock,thumbnail} = currentItem;
    return (
        <section className='container product_details my-4 py-4 bg-warning'>
           <div className='row p-5 product_display'>
               <div className='col-3 imageSlider'>
                   <img src={thumbnail} alt={title}/>
               </div>
               <div className='col-7 details'>
                    <div className='title_ mt-2'>
                        <span className='title_head fw-bold'>Title : </span>
                        <span className='title_ans text-secondary'>{title}</span>
                    </div>
                    <div className='brand_ mt-2'>
                        <span className='brand_head fw-bold'>Brand : </span>
                        <span className='brand_ans text-secondary'>{brand}</span>
                    </div>
                    <div className='cat_ mt-2'>
                        <span className='cat_head fw-bold'>Category : </span>
                        <span className='cat_ans text-secondary'>{category}</span>
                    </div>
                    <div className='desc_ mt-2'>
                        <span className='desc_head fw-bold'>Description : </span>
                        <span className='desc_ans text-secondary'>{description}</span>
                    </div>
                    <div className='price_ mt-2'>
                        <span className='price_head fw-bold'>Price : </span>
                        {/* <small className='fst-italic text-secondary text-decoration-line-through'>Rs.{Number(price).toFixed(2)}</small> */}
                        <span className='text-secondary'>Rs.{(Number(price) - (Number(price)*discountPercentage)/100).toFixed(2)}</span>
                    </div>
                    <div className='ratings_ mt-2'>
                        <span className='ratings_head fw-bold'>Ratings : </span>
                        <span><Ratings rating = {rating}/></span>
                    </div>
                    <div className='stock_ mt-3 d-flex gap-3'>
                        <div className='stock_cal'>
                           <span className={`${quantity === 0 ? 'disablePlusStock' : ''}`} onClick={()=>count('minus')}>-</span>
                           <span>{quantity}</span>
                           <span className={`${stock <= quantity ? 'disablePlusStock' : ''}`} onClick={()=>count('plus')}>+</span>
                        </div>
                        <button type='button' className={`${quantity===0 ? 'disabled':''} btn btn-primary`} onClick={()=>AddToCart()}>Add To Cart</button>
                    </div>
               </div>
           </div>
        </section>
    )
}

export default ProductDetail