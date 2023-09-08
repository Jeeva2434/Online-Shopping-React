import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';


const Ratings = ({rating}) => {
  return (
    <>
     {[...Array(5)].map((_,i)=>{
        return (
            <span key={i}>
                {
                  (rating >= i+1 ) ? (<AiFillStar/>) : (<AiOutlineStar/>)
                }
            </span>
        )
      })
     }
    </>
  )
}

export default Ratings