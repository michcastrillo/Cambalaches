

const CartTotal = ({total, disscount}) => {

  return (
      <div>
        <p>{`Total: ${total}`}</p>
        <p>{`DiscountedTotal: ${disscount}`}</p>
        <button>Comprar</button>
        <button>Limpiar Carrito</button>
      </div>
  )
}

export default CartTotal;