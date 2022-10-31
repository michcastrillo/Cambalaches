import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { precioDesUnitario,precioDesTotal, total, totalDescuento} from '../operaciones/operaciones';
import Modals from './Modals';

const NavHome = ({nameUser}) => {
  const {userid}= useParams();
  const [getProduct, SetGetProduct] = useState([]);
  const [productosCart, setProductosCart] = useState([])

  const handleClick = (e) => {
    sessionStorage.removeItem("authUser")
    sessionStorage.removeItem("productosHome")
    sessionStorage.removeItem("productosCart")
  }

  const handle = () => {
    const listProducHome = JSON.parse(sessionStorage.getItem("productosHome")); //Tiene los productos si el cart existe
    const listProdCart = JSON.parse(sessionStorage.getItem("productosCart")); //Productos del todo
    if(listProducHome.length > listProdCart.length){
        listProducHome.map(element => {
            const objProducto = {
            id: element.id,
            nomProducto: element.title,
            precioUni: element.price,
            cantiProduc: element.quantity || 1,
            desPorcentaje: element.discountPercentage,
             precioDesUni: precioDesUnitario(element.price, element.discountPercentage),
            precioDesTotal: precioDesTotal(element.price, element.discountPercentage,element.quantity),
            total: total(element.quantity, element.price),
            totalConDes: totalDescuento(element.quantity,element.discountPercentage, element.price),
            }
           setProductosCart(productosCart.push(objProducto))
        });
        sessionStorage.setItem("productosCart", JSON.stringify(productosCart));
    }
    if(getProduct === null){
        sessionStorage.setItem("productosCart", JSON.stringify([]));
      }

}



  function links(){
    if(nameUser===""){
      // return <Modals/>
       return <Link to={`/home/${userid}`} className='Link'>Home</Link>;
    }else{
      // return <Modals/>
      return <Link to={`/cart/${userid}`} onClick = {handle} className='Link'>My cart</Link>;
    }
  }
  
  return (
    <div>
      <header>
        {/* Nombre del usuario */}
        <p className='user_p'>{nameUser}</p>
        <div className='conte-left'>
          <ul>
            <li>
            <Link to={'/login'} onClick = {handleClick} className='Link'>Logout</Link>
            </li>
            <li>
              {links()}
            </li>
            {/* <li>
            <Link to={`/cart/${userid}`} onClick={handle} className='Link'>Carts 2</Link>
            </li> */}
          </ul>
        </div>
      </header>
    </div>
  )
}

export default NavHome;