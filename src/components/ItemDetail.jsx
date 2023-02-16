import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text, Image} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import {useParams} from "react-router-dom"
import React from 'react'

const ItemDetail = ({product}) => {
  
  return (
    <>
            <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product.name}</Heading>
      <Text>
      {product.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {product.price}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {product.stock}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ItemCount stock={product.stock}/>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

    </>
  )
}

export default ItemDetail