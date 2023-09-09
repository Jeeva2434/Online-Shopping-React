import React from 'react'
import CategoryList from './CategoryList';
import { GlobalState } from '../ContextAPI';

const Category = () => {
    const{category,setCategory} = GlobalState();

    return (
        <>
            {category && category.map((catItem,i)=>{
                return (
                   <CategoryList key={catItem.id} {...catItem} category={category} setCategory={setCategory}/>
                )
            })}
        </>
    )
}

export default Category