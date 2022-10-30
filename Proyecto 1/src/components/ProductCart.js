import './ProductCart.css';

const ProductCart = ({title, price, priceD, id}) => {
    const handleDelete = (e) => sessionStorage.removeItem("cartUser");

    const handle = (e) => {
      console.log(id)
    }

  return (
    <div>
      <div className='conte-card'>
        <h2>{`Name Product: ${title}`}</h2>
        <h3>{`Original price: ${Math.round(price)}`}</h3>
        <h3>{`Price with discount: ${Math.round(priceD)}`}</h3>
        <button onClick={handle}>Eliminar</button>
      </div>
    </div>
  )
}

export default ProductCart