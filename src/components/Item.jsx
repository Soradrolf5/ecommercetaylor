import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, category}) => {
  return (
    <div key={id}>
        <Card maxW='sm'>
    <CardBody>
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text color='blue.600' fontSize='2xl'>
          {price}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          {category}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>

         <Link to={`/item/${id}`}>
        <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
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