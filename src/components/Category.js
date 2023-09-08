import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList';

const Category = () => {
    const [category,setCategory] = useState([]);

    useEffect(()=>{
        const categoryList = async() => {
            try{
             const response = await fetch('	https://dummyjson.com/products/categories');
             const data = await response.json();
             console.log(data);
             let structureChange = data.map((item,i)=>{
               return {
                id:i+1,
                name : item
               }
             }) 
             setCategory([{id:0,name:'All',activeCategory:true},...structureChange]);
            }catch(err){
               console.log(err);
            }
          } 
          categoryList();
    },[]);


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