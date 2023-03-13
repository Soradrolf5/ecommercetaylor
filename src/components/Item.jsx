import React from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, category, img}) => {
  return (
    <div className="card__container" key={id}>
        <Card maxW='sm'>
    <CardBody>
      <Stack mt="auto" spacing='3'>
      <img className="card__img" src={img} alt="..." />
        <Heading size='md'>{name}</Heading>
        <Text color='teal' fontSize='2xl'>
          {price}
        </Text>
        <Text color='teal' fontSize='2xl'>
          {category}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>

         <Link to={`/item/${id}`}>
        <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='teal'>
         Detalles
         </Button>
         </ButtonGroup>
         </Link>
        
      
    </CardFooter>
  </Card>
  </div>
  )
}

export default Item