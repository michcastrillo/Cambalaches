import './HomeProducts.css';
import { precioDesUnitario,precioDesTotal, total, totalDescuento} from '../operaciones/operaciones';

const ProductHome = ({images,title, id, idE}) => {

  // const [consulProducto, setConsulProduct] = useState([]);
  // const [prueba, setPrueba] = useState(0);

  // useEffect(()=> {
  //   axios.get(`https://dummyjson.com/products/${id}`)
  //   .then(res=>setConsulProduct(res.data))
  //   .catch(err=>console.error("Error escrito"));
  // },[])

  //Calculos para cada producto


  const getProduct = JSON.parse(sessionStorage.getItem("productosCart"));


  // const [siu, setSiu] = useState({});
  // const [bd, setbd] = useState([]);

  const handleChange = (e) => {
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
      if(getProduct){
        getProduct.push(objProducto)
      }
    }
    sessionStorage.setItem("productosCart", JSON.stringify(getProduct));
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