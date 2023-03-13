import { useContext, useState } from 'react'
import { ButtonGroup, IconButton, Tooltip, Center, Button} from "@chakra-ui/react";
import React from 'react'
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {CartContext} from '../contexts/ShoppingCartContext'
const ItemCount = ({stock, id, price, name, img }) => {
  const [cart, setCart] = useContext(CartContext)
    const [counter, setCounter] = useState(1)
    const sumar =()=>{
        setCounter (counter+1)
    }
    const restar =()=>{
        setCounter (counter-1)
    }

    const addToCart = () => {
      setCart((currItems) => {
        const isItemFound = currItems.find((item) => item.id === id);
        if (isItemFound) {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + counter };
            } else {
              return item;
            }
          });
        } else {
          return [...currItems, { id, quantity: counter, price, name }];
        }
      });
    };
  return (
    <div>
      <ButtonGroup  spacing='6'>
      {counter < 1 ? (<Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>): (<Button onClick={restar} colorScheme='teal'>-</Button>)}
          <Center>
          <Button
            onClick={() => addToCart()}
            variant="solid"
            colorScheme="blue"
          >
            Add to cart: {counter}
          </Button>
        </Center>
      {counter < stock ? (<Button onClick={sumar} colorScheme='teal'>+</Button>): (<Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>)} 
  
  
</ButtonGroup>

    </div>
  )
}

export default ItemCount