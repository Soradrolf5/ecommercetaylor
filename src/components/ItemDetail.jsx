import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text, Image} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import {useParams} from "react-router-dom"
import React from 'react'

const ItemDetail = ({product}) => {
  
  return (
    <>
            <Card maxW='sm' className='proDetalle'>
  <CardBody >
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product.name}</Heading>
      <Text>
      {product.description}
      </Text>
      <Text color='teal' fontSize='2xl'>
        {product.price}
      </Text>
      <Text color='teal' fontSize='2xl'>
        {product.stock}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ItemCount stock={product.stock}/>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='teal'>
        Buy now
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

    </>
  )
}

export default ItemDetail