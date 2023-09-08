import React, { useState } from 'react'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';

const Like = () => {

    const[fav,setFav] = useState(false); 

    return (
        <span className='like' onClick={()=>setFav(!fav)}>
            {fav ? (<AiFillHeart className='likedHeart'/>) : (<AiOutlineHeart/>)}
        </span>
    )
}

export default Like