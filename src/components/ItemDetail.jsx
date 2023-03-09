import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text, Image} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React from 'react'

const ItemDetail = ({product}) => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const productRef = doc(db, "productos", `${id}`);

    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);

  const prodFilter = product.filter((prod) => prod.id == id);
  return (
    <>
     {bikeFilter.map((prod) => (
      <div key={prod.id}>
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
 </div>
 ))}
    </>
  )
}

export default ItemDetail