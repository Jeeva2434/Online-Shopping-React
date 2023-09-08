import React from 'react'

const CategoryList = ({id,name,activeCategory,category,setCategory}) => {


    const getCatProducts = async(activeCat) => {
        try{
            const CAT_URL = activeCat !== 'All' ? `https://dummyjson.com/products/category/${activeCat}` : 'https://dummyjson.com/products';
            let response = await fetch(CAT_URL);
            let data = await response.json();
            console.log('cat product',data);
        }catch(err){
        console.log(err);
        }
    }

    const handleCategory = (selectedID) => {
        let activateCat = category.map((category)=> {
          if(category.id === selectedID){
            getCatProducts(category.name);
            return {...category,activeCategory:true}
          }else{
            return {...category,activeCategory:false}
          }
        })
        setCategory(activateCat);
    }

    return (
        <>
            <span className={`${activeCategory ? 'active':''} catItem me-3`} onClick={()=>handleCategory(id)} key={id}>{name}</span>
        </>
    )
}

export default CategoryList