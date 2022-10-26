
import React, { useContext, useEffect, useState } from 'react'
import {Navigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import ProductCart from './ProductCart';

const Cart = () => {
  const {userid}= useParams();
  const { isLogin } = useContext(AuthContext);
  console.log(isLogin)
  console.log(userid)
  const [product, setProducts] = useState([]);

  // useEffect(()=>{
  //   //Obtiene solo los productos seccion
  //   const getCart = () => {
  //     let sessionStore = JSON.parse(sessionStorage.getItem('cartUser'));
  //     console.log(sessionStore);
  //     Object.entries(sessionStore)
  //     .map(entry => {
  //       const [key, value] = entry;
  //         if(key === "products"){
  //           setProducts(value);
  //         }
  //       })
  //   }
  //   getCart();
  // },[product]);

  // console.log(product)


  return (
    <div>
      {/* Pinta los productos */}
      {
      isLogin == userid
      ? product.map(ele=>(<ProductCart key={Math.random()*1000} title={ele.title} price={ele.price}/>))
      :<Navigate to={'/login'}/>
      }

    </div>
  )
}

export default Cart