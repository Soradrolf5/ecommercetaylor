import { Card, CardBody, CardFooter, Stack, Heading, Divider, Text} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import React from 'react'

const ItemDetail = ({product}) => {

  

  return (
    <>
    <div key={product.id}>
            <Card maxW='sm' className='proDetalle'>
  <CardBody >
    <Stack mt= "auto" spacing='3'>
      <Heading size='md'>{product.name}</Heading>
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
    <ItemCount stock={product.stock} id={product.id} price={product.price} name={product.name} img={product.img}/>
  </CardFooter>
</Card>
</div>
    </>
  )
}

export default ItemDetail