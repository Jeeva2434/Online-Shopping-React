import React, { useState } from 'react'
import { GlobalState } from '../ContextAPI';


const QuantityChange = ({quantity,setQuantity,stock,cartAction,prod}) => {
    const {quantityUpdate} = GlobalState();
    const[cartQuantity,setCartQuantity] = useState(quantity);

    const count = (condition) => {
        let result = cartAction ? cartQuantity: quantity;
        if(condition === 'plus'){
            if(stock <= result) return
            result += 1
        }else{
            if(result=== 0) return;
            result -= 1;
        }
        if(!cartAction) {
            setQuantity(result);
        }else{
            setCartQuantity(result);
            quantityUpdate(prod,result);
        }
    }

    return (
        <div className='stock_cal'>
            <span className={`${quantity === 0 ? 'disablePlusStock' : ''}`} onClick={()=>count('minus')}>-</span>
            <span>{cartAction ? cartQuantity: quantity}</span>
            <span className={`${stock <= quantity ? 'disablePlusStock' : ''}`} onClick={()=>count('plus')}>+</span>
        </div>
    )
}

export default QuantityChange