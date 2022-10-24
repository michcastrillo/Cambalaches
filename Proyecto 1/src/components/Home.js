import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavHome from './NavHome.js'

const Home = () => {
  const {userid}= useParams();
  const[nameUser, setNameUser] = useState([]);
  const [cartUser, setCartUser] = useState([]);

  //

  useEffect(()=>{
    axios.get(`https://dummyjson.com/users/${userid}`).then(res=>setNameUser(res.data)).catch(err=>console.error("Error escrito"));
    axios.get(`https://dummyjson.com/carts/user/${userid}`).then(res=>setCartUser(res.data.carts)).catch(err=>console.error("Error escrito"));

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
    </div>
  )
}

export default Home;