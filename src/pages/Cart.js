import React, { useEffect, useState } from 'react'
import { GlobalState } from '../ContextAPI'
import CartList from '../components/CartList';

const Cart = () => {
  const{cart} = GlobalState();
 
  const totalAmt =  cart.reduce((acc,item)=> acc += Number(item.price * item.quantity),0);

  return (
    <>
      {cart?.length > 0 ?(
        <div className='d-flex py-4 mt-3'>
          <div className='total ps-5'>
            <h5>Total cash:</h5>
            <span className='fw-bold fs-3'>Rs. {totalAmt}</span>
          </div>
          <table className='container'>
            <thead>
              <tr>
                  <th style={{width:'10%'}}>Order ID</th>
                  <th style={{width:'15%'}}>Image</th>
                  <th style={{width:'15%'}}>Product Name</th>
                  <th style={{width:'10%'}}>Brand</th>
                  <th style={{width:'16%'}}>Category</th>
                  <th style={{width:'14%'}}>Ratings</th>
                  <th style={{width:'10%'}}>Quantity</th>
                  <th style={{width:'10%'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.length > 0 && cart.map((prod,i)=>{
                return(
                  <CartList {...prod} prod={prod} key={prod.id}/>
                )
              })}
            </tbody>
          </table>
        </div> 
        ):(
            <div className='container fw-normal fs-1 bg-warning p-5 mx-auto my-5 text-center'>
                Strike out! Your cart is empty ...
            </div>
        )             
      }
      
        
    </>
  )
}

export default Cart