import React from 'react'
import { useContext} from 'react'
import { CartContext } from '../contexts/ShoppingCartContext'

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext)
  const quantity = cart.reduce( (acc, curr) => {
  return acc + curr.quantity
  },0) 
  return (
    <div>
      <button >
      <span>🛒</span>
      <span>{quantity}</span>
      </button>
    </div>
  )
}

export default CartWidget