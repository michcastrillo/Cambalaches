import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import NavHome from './NavHome.js'
import ProductHome from './HomeProducts';
import { AuthContext } from '../context/AuthContext.js';

const Home = () => {
  const {userid}= useParams();
  const { isLogin } = useContext(AuthContext);
  console.log(userid, isLogin) 
  const[nameUser, setNameUser] = useState([]);
  const [cartUser, setCartUser] = useState([]);
  const [products, setProducts] = useState([]);
  //

  useEffect(()=>{
    axios.get(`https://dummyjson.com/users/${userid}`).then(res=>setNameUser(res.data)).catch(err=>console.error("Error escrito"));
    axios.get(`https://dummyjson.com/carts/user/${userid}`).then(res=>setCartUser(res.data.carts)).catch(err=>console.error("Error escrito"));
    axios.get(`https://dummyjson.com/products`).then(res=>setProducts(res.data.products)).catch(err=>console.error("Error escrito"));

    // console.log(1)
    const setCartSeccion = () => {
      if(cartUser){
        console.log("hola",cartUser);
        console.log(!cartUser);
        cartUser.forEach(element => {
          sessionStorage.setItem('cartUser', JSON.stringify(element));
          console.log(element)
        });
      }
    }
    setCartSeccion();
  },[]);
  

  
  let welcomeMsj = `Welcome ${nameUser.firstName} ${nameUser.lastName}`;

  return (
    <div>
      <NavHome nameUser={welcomeMsj}/>
      {
        isLogin == userid
        ?products.map(item=>(<ProductHome key={Math.random()*1000} images={item.images[0]} title={item.title}/>))
        :<Navigate to="/login"/>
      }
    </div>
  )
}

export default Home;