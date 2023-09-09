import React from 'react'
import Ratings from './Ratings'
import QuantityChange from './QuantityChange'
import {AiFillDelete} from 'react-icons/ai';
import { GlobalState } from '../ContextAPI';

const CartList = ({id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,quantity,prod}) => {

    const{RemoveFromCart} = GlobalState();
  return (
    <tr>
        <td style={{width:'10%'}}>{id}</td>
        <td style={{width:'15%'}}><img src={thumbnail} alt={title} style={{height:'100%'}}/></td>
        <td style={{width:'15%'}}>{title}</td>
        <td style={{width:'10%'}}>{brand}</td>
        <td style={{width:'16%'}}>{category}</td>
        <td style={{width:'14%'}}><Ratings rating={rating}/></td>
        <td style={{width:'10%'}}><QuantityChange quantity={quantity} stock={stock} cartAction={true} prod={prod}/></td>
        <td style={{width:'10%',color:"red",cursor:'pointer'}}><AiFillDelete className='' size={24} onClick={()=>RemoveFromCart(id)}/></td>
    </tr>
  )
}

export default CartList