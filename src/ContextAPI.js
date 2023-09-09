import React, { createContext, useContext, useEffect, useState } from 'react'

const ShopCart = createContext();


const ContextAPI = ({children}) => {

    const [products,setProducts] = useState([]);
    const [category,setCategory] = useState([]);
    const [displayProduct,setDisplayProduct] = useState([]);
    const[cart,setCart] = useState([]);
    const[filterOpt,setFilterOpt] = useState({sort:''});

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

    const AddToCart = (currentItem,quantity) => {
        setCart([...cart,{...currentItem,quantity:quantity}]);
        setDisplayProduct((prev)=> prev.map(item=>{
            if(item.id !== currentItem.id)
              return item;
            else{
                return {...item,quantity:quantity}
            }
        }));
    }

    const RemoveFromCart = (id) => {
        setCart((prev)=> prev.filter(item=>item.id !== id));
        setDisplayProduct((prev)=> prev.map(item=>{
            if(item.id !== id)
              return item;
            else{
                return {...item,quantity:0}
            }
        }));
    }
    
    const quantityUpdate = (currentItem,quantity) => {
        const updatedCart = cart.map((item,i) => {
            if(currentItem.id === item.id){
                return {...item,quantity:quantity}
            }else{
                 return item;
            }
        })
        setCart(updatedCart);
    }

    let timer;
    const searchFilter = (val) => {
        clearTimeout(timer);
        timer = setTimeout(async()=>{
            const response = await fetch(`https://dummyjson.com/products/search?q=${val}`)
            const data = await response.json();
            setDisplayProduct(data.products);
        },2000);
        
        return () => clearTimeout(timer);
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
            handleCategory,
            cart,
            setCart,
            AddToCart,
            RemoveFromCart,
            quantityUpdate,
            searchFilter,
            filterOpt,
            setFilterOpt
        }}>
            {children}
        </ShopCart.Provider>
    )
}

export const GlobalState = () => {
    // console.log(useContext(ShopCart));
    return useContext(ShopCart);
}

export default ContextAPI