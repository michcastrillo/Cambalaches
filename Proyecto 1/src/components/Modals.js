import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import { precioDesUnitario,precioDesTotal, total, totalDescuento} from '../operaciones/operaciones';

const Modals = () => {
    const {userid}= useParams();
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [getProduct, SetGetProduct] = useState([]);
    const [productosCart, setProductosCart] = useState([])
    const [precioCart, setPrecioCart] = useState(0);

   useEffect(()=> {
    const get = () => {
        SetGetProduct(JSON.parse(sessionStorage.getItem("productosCart")))
    }
    get();
   },[]);

    //Resultado del total de los productos del cart
    useEffect(()=>{
        const getProduct = JSON.parse(sessionStorage.getItem("productosCart"));

        if(getProduct){
            let precio = 0;
            getProduct.map(element => {
                precio = precio + element.totalConDes;
            });
            setPrecioCart(precio);
        }
    },[precioCart])

    //Setea los productos
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

  return (
    <div>
        <div onClick={handle}>
            <button onClick={openModal1}>My Cart</button>
        </div>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h2>Lista de productos</h2>
        <ul>
        {getProduct
        ?getProduct.map(ele=> <li key={Math.random()*1000}>{ele.nomProducto}</li>)
        :<li key={Math.random()*1000}>No hay productos en el cart</li>}
        </ul>
        <p>{`Precio del cart: ${precioCart}`}</p>
        <Link to={`/cart/${userid}`}>View my cart</Link>
      </Modal>
    </div>
  );
};

export default Modals;