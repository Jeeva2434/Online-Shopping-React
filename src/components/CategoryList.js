import React from 'react'
import { GlobalState } from '../ContextAPI'

const CategoryList = ({id,name,activeCategory,category,setCategory}) => {

    const{handleCategory} = GlobalState();

    return (
        <>
            <span className={`${activeCategory ? 'active':''} catItem me-3`} onClick={()=>handleCategory(id)} key={id}>{name}</span>
        </>
    )
}

export default CategoryList