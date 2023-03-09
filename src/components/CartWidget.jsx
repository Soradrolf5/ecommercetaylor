import React from 'react'
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
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
      <span>shopping cart</span>
      <span>{quantity}</span>
      </button>
    </div>
  )
}

export default CartWidget