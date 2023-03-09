import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text, Image} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React from 'react'

const ItemDetail = ({product}) => {


  return (
    <>
            <Card maxW='sm' className='proDetalle'>
  <CardBody >
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product.name}</Heading>
      <Text color='teal' fontSize='2xl'>
        {prod.price}
      </Text>
      <Text color='teal' fontSize='2xl'>
        {prod.stock}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ItemCount stock={prod.stock}/>
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