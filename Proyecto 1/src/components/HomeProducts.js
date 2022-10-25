import './HomeProducts.css';

const ProductHome = ({images,title}) => {

  return (
    <figure>  
        <img src={images}></img>
        <figcaption>
            <p>{title}</p>
            <button>Agregar</button>
        </figcaption>
    </figure> 
  )
}

export default ProductHome;