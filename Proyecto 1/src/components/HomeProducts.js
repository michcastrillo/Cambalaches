import './HomeProducts.css';
import { precioDesUnitario,precioDesTotal, total, totalDescuento} from '../operaciones/operaciones';

const ProductHome = ({images,title, id, idE}) => {

  const handleChange = (e) => {
    const oldProduct = JSON.parse(sessionStorage.getItem("productosCart"));
    console.log(id);
    let obj = {}
    id.map(ele => {
      if(ele.id == idE)
      obj = ele;
      console.log(ele.id, idE)
    });
    if(obj){
      console.log(obj.id)
      const objProducto = {
        id: obj.id,
        nomProducto: obj.title,
        precioUni: obj.price,
        cantiProduc:  1,
        desPorcentaje: obj.discountPercentage,
        precioDesUni: precioDesUnitario(obj.price, obj.discountPercentage),
        precioDesTotal: precioDesTotal(obj.price, obj.discountPercentage, 1),
        total: total(1, obj.price),
        totalConDes: totalDescuento(1,obj.discountPercentage, obj.price),
      }
      // setProdu(produc.push(objProducto))
      if(oldProduct){
        oldProduct.push(objProducto)
      }
    }
    sessionStorage.setItem("productosCart", JSON.stringify(oldProduct));
    window.alert("Se agrego un producto")
  }

  return (
    <figure>  
        <img src={images}></img>
        <figcaption>
            <p>{title}</p>
            <button onClick={handleChange}>Agregar</button>
        </figcaption>
    </figure> 
  )
}

export default ProductHome;