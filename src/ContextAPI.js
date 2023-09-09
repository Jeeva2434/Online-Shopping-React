import React, { createContext, useContext, useEffect, useState } from 'react'

const ShopCart = createContext();


const ContextAPI = ({children}) => {

    const [products,setProducts] = useState([]);
    const [category,setCategory] = useState([]);
    const [displayProduct,setDisplayProduct] = useState([]);

    useEffect(()=>{
      const fetchData =  async() => {
        try{
          const response = await fetch('https://dummyjson.com/products');
          const data = await response.json();
          // console.log(data.products);
          setProducts(data.products);
          setDisplayProduct(data.products);
        }catch(err){
          console.log(err);
        }
      } 

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
      fetchData()
    },[]);

    const getCatProducts = async(activeCat) => {
        try{
            const CAT_URL = activeCat !== 'All' ? `https://dummyjson.com/products/category/${activeCat}` : 'https://dummyjson.com/products';
            let response = await fetch(CAT_URL);
            let data = await response.json();
            console.log('cat product',data);
            setDisplayProduct(data.products); 
        }catch(err){
        console.log(err);
        }
    }

    const handleCategory =(selectedID) => {
        
        let activateCat = category.map((category)=> {
          if(category.id === selectedID){
            setTimeout(
                ()=>{
                   getCatProducts(category.name);
                },100);            
            return {...category,activeCategory:true}
          }else{
            return {...category,activeCategory:false}
          }
        })
        console.log(activateCat);
        setCategory(activateCat);
    }


    return (
        <ShopCart.Provider
        value={{
            products,
            setProducts,
            category,
            setCategory,
            displayProduct,
            setDisplayProduct,
            handleCategory
        }}>
            {children}
        </ShopCart.Provider>
    )
}

export const GlobalState = () => {
    console.log(useContext(ShopCart));
    return useContext(ShopCart);
}

export default ContextAPI