import React from 'react'
import { Link } from 'react-router-dom'
import {
   Button
  } from '@chakra-ui/react'
const NoOrder = () => {
  return (
    <div className="noProductos">
        <h3>No hay productos en el carrito, conoce nuestro catalogo:</h3>
        <Link to={"/catalogue"}><Button colorScheme="teal" type="submit" m={5} className="botonCatalogo">Catalogo</Button></Link>
    </div>
  )
}

export default NoOrder