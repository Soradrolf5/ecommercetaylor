import { useState } from 'react'
import {Text, ButtonGroup, IconButton, Tooltip, Center, Button} from "@chakra-ui/react";
import React from 'react'
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1)
    const sumar =()=>{
        setCounter (counter+1)
    }
    const restar =()=>{
        setCounter (counter-1)
    }

  return (
    <div>
      <ButtonGroup  spacing='6'>
      {counter < 1 ? (<Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>): (<Button onClick={restar} colorScheme='teal'>-</Button>)}
       <Center w="50px" h="30px">
       <Text as="b">{counter}</Text>
       </Center>
      {counter < stock ? (<Button onClick={sumar} colorScheme='teal'>+</Button>): (<Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>)} 
  
  
</ButtonGroup>

    </div>
  )
}

export default ItemCount