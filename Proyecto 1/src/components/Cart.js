
import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart';

const Cart = () => {
  const [product, setProducts] = useState([]);

  useEffect(()=>{
    //Obtiene solo los productos seccion
    const getCart = () => {
      let sessionStore = JSON.parse(sessionStorage.getItem('cartUser'));
      console.log(sessionStore);
      Object.entries(sessionStore)
      .map(entry => {
        const [key, value] = entry;
          if(key === "products"){
            setProducts(value);
          }
        })
    }
    getCart();
  },[]);

  console.log(product)


  return (
    <div>
      <h2>My cart</h2>
      {/* Pinta los productos */}
      {
      product.map(ele=> <ProductCart key={Math.random()*1000} title={ele.title} price={ele.price}/>)
      }
      
    </div>
  )
}

export default Cart