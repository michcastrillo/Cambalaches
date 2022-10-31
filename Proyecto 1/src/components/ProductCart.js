import './ProductCart.css';
import React, { useContext, useEffect, useState } from 'react'

const ProductCart = ({title, price, priceD, id}) => {
    //const handleDelete = (e) => sessionStorage.removeItem("cartUser");
    


    const handle = (e) => {
      let testArray = {};
      testArray= JSON.parse(sessionStorage.getItem("productosCart"));
      if(testArray){
        Object.keys(testArray).forEach(function(key) {
          if(testArray[key].id === id){
            delete testArray[key]
              console.log(testArray);
          }
        });
        sessionStorage.removeItem("productosCart")
        sessionStorage.setItem('productosCart', JSON.stringify(testArray));
      }
      id=0;
      window.location.reload();
    }

  return (
   
      <div className='conte-card'>
        <h3>{`Name Product: ${title}`}</h3>
        <p>{`Original price: ${Math.round(price)}`}</p>
        <p>{`Price with discount: ${Math.round(priceD)}`}</p>
        <button onClick={handle}>Eliminar</button>
      </div>

  )
}

export default ProductCart