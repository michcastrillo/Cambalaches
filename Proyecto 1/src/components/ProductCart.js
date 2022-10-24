import './ProductCart.css';

const ProductCart = ({title, price}) => {
    const handleDelete = (e) => sessionStorage.removeItem("cartUser");

  return (
    <div>
      <div className='conte-card'>
        <h2>{`Name Product: ${title}`}</h2>
        <h3>{`Price Producnt: ${price}`}</h3>
        <button>Eliminar</button>
      </div>
    </div>
  )
}

export default ProductCart