import React from 'react'
import {
  FormControl,
  FormLabel,
  Button,
  FormHelperText,
  Input,
} from '@chakra-ui/react'

const Cart = () => {
  return (
    <div>
      <FormControl isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' />
</FormControl>
<FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
<Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
    </div>
  )
}

export default Cart