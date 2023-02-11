import React from 'react'
import product from '../containers/ItemListContainer'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'

const Item = ({id, nombre, precio}) => {
  return (
    <div key={id}>
        <Card maxW='sm'>
    <CardBody>
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{nombre}</Heading>
        <Text color='blue.600' fontSize='2xl'>
          {precio}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  </div>
  )
}

export default Item