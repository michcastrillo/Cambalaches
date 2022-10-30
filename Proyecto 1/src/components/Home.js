import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import NavHome from './NavHome.js'
import ProductHome from './HomeProducts';
import { AuthContext } from '../context/AuthContext.js';

const Home = () => {
  const {userid}= useParams();
  const { isLogin } = useContext(AuthContext);
  //console.log(userid, isLogin) 
  const[nameUser, setNameUser] = useState([]);
  const [cartUser, setCartUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [produ, setProduc] = useState([]);
  //

  useEffect(()=>{
    axios.get(`https://dummyjson.com/users/${userid}`).then(res=>setNameUser(res.data)).catch(err=>console.error("Error escrito"));
    axios.get(`https://dummyjson.com/carts/user/${userid}`).then(res=>setCartUser(res.data.carts)).catch(err=>console.error("Error escrito"));
    axios.get(`https://dummyjson.com/products`).then(res=>setProducts(res.data.products)).catch(err=>console.error("Error escrito"));

    // // console.log(1)
    // const setCartSeccion = () => {
    //   if(cartUser){
    //     console.log("hola",cartUser);
    //     console.log(!cartUser);
    //     cartUser.forEach(element => {
    //       sessionStorage.setItem('cartUser', JSON.stringify(element));
    //       console.log(element)
    //     });
    //   }else{
    //     setCartUser
    //   }
    // }
    // setCartSeccion();
  },[]);

  
  //Productos del cart
  const agregarCart = (e) => {
    if(cartUser.length!==0){
      //console.log(cartUser);
      cartUser.map(element => {
        Object.entries(element).map(entry => {
          const [key, value] = entry;
          if(key === "products"){
            setProduc(value);
          }
        })
      });
    }
    if(cartUser.length === 0){
      setProduc([])
    }
    sessionStorage.setItem("productosHome", JSON.stringify(produ));
  }
  
//  products.map(element =>{
//   if(element.id === 1){
//     console.log(element)
//   }
//  })

// function retorna (id) {
//   let objR = {};
//   products.map(element => {
//     if(element.id === id){
//       objR = element;
//       console.log(objR);
//       return objR
      
//     }
//   })
// }

// let anonima = retorna(3);
// console.log(anonima)

//   const le = (id) => {
//     products.map(element =>{
//       if(element.id === id){
//       console.log(element);
//       }
//      });
//   }

//   let a = le(4);
//   console.log(a);

  let welcomeMsj = `Welcome ${nameUser.firstName} ${nameUser.lastName}`;

  return (
    <div onLoad={agregarCart}>
      <NavHome nameUser={welcomeMsj}/>
      {
        isLogin == userid
        ?products.map(item=>(<ProductHome key={Math.random()*1000} images={item.images[0]} title={item.title} id={products} 
        idE= {item.id}/>))
        :<Navigate to="/login"/>
      }
    </div>
  )
}

export default Home;