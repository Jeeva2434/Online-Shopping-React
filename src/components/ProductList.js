import React from 'react'
import Ratings from './Ratings';
import Like from './Like';
import {FaBookmark} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductList = ({id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail}) => {

    const navigate = useNavigate();

    const viewDetails = (e) => {
        const parentWithClass = e.target.closest('.product_likes');
        if(!parentWithClass){
            navigate(`/productDetail/${id}`);
        }
    }     
    

    return (
        <div className='col-12 col-sm-6 col-md-4  col-xl-3 p-2 my-0 my-md-3'>
            <div className='items_details' onClick={(e)=>viewDetails(e)}>
                <div className='img_container w-100 position-relative'>
                    <img src={thumbnail} alt={title}/>
                    <span className='position-absolute discount_tag'>
                        <FaBookmark size={70}/>
                        <span className='discount_value'>{discountPercentage}%<span className='d-inline-block ps-2'>OFF</span></span>
                    </span>
                </div>
                <div className='product_details p-3'>
                    <div className='d-flex justify-content-between mb-2'>
                        <div className='rating_container'>
                            <Ratings rating={rating}/>
                        </div>
                        <div className='product_likes'>
                            <Like liked ={price > 200}/>
                        </div>
                    </div> 
                    <strong className='title'>{title}</strong>
                    <div className='price fw-bold text-primary mt-2'>
                        <small className='original_price fst-italic text-muted text-decoration-line-through'>Rs.{Number(price).toFixed(2)}</small>
                        <span className='discounted_price ps-3'>Rs.{(Number(price) - (Number(price)*discountPercentage)/100).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList
