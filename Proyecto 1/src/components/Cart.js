import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {Navigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import ProductCart from './ProductCart';
import CartTotal from './CartTotal';
import NavHome from './NavHome.js';

const Cart = () => {
  const {userid}= useParams();
  const { isLogin } = useContext(AuthContext);
  console.log(isLogin)
  console.log(userid)
  const [cartUser, setCartUser] = useState([]);
  const [precioCart, setPrecioCart] = useState(0);

  useEffect(()=>{
    axios.get(`https://dummyjson.com/carts/user/${userid}`).then(res=>setCartUser(res.data.carts)).catch(err=>console.error("Error escrito"));
  },[]);

  //Productos del cart
   const getProduct = JSON.parse(sessionStorage.getItem("productosCart"));

  useEffect(()=>{

    const pro = JSON.parse(sessionStorage.getItem("productosCart"));
     let precio = 0;
    if(pro){
      pro.map(element => (element!=null?
            precio = precio + element.totalConDes:console.log('precio no encontrado')));
        setPrecioCart(precio);
    }
},[precioCart])

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

  const handle = (e) => {
    let testArray = {};
    testArray= JSON.parse(sessionStorage.getItem("productosCart"));
    if(testArray){
      Object.keys(testArray).forEach(function(key) {
        if(testArray[key] != null){
            delete testArray[key]
            console.log(testArray);
        }
      });
      sessionStorage.removeItem("productosCart")
      sessionStorage.setItem('productosCart', JSON.stringify(testArray));
    }
    window.location.reload();
  }
  return (
    <div>
      <NavHome nameUser=""/>
      <button onClick={handle}>Limpiar carrito</button>
      <h2>My cart</h2>
      <p>{`Precio del cart: ${Math.round(precioCart)}`}</p>
      {/* Pinta los productos */}
      {
        (isLogin == userid)?
          getProduct.map(element =>(element!=null?<ProductCart key={Math.random()*1000} title={element.nomProducto} 
          price={element.precioUni} priceD={element.totalConDes} id={element.id}/>:console.log('producto no encontrado')))
       :
          <h2>No hay productos</h2>
      }


      {/* {
      isLogin == userid
      ? 
      cartUser.map(item=>(item.products.map(it=>(<ProductCart key={Math.random()*1000} title={it.title} price={it.price}/>))))
      :(isLogin == userid)?
      cartUser.map(items=>(<CartTotal key={Math.random()*1000} total={items.total} disscount={items.discountedTotal}/>))
      :
      <Navigate to={'/login'}/>
      } */}

    </div>
  )
}

export default Cart