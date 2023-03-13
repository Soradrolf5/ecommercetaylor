import {
  Button,
  Container,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import SendOrder from "./SendOrder";
import NoOrder from "./NoOrder"

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const totalCompra = () => {
    return cart.reduce((acc, prod)=> acc += prod.price * prod.quantity,0)
    };

    const eliminarCarrito = (id) => {
     setCart(cart.filter((item)=> item.id !== id))
  };
 
  

  return (
    <>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Carrito
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container key={item.id} className="main-catalogue">
            <Card maxW="sm">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Quantity: {item.quantity}</Text>
                <Text>Price: {item.price * item.quantity}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="red"
                  onClick={()=>eliminarCarrito(item.id)}
                >
                  Eliminar
                </Button>
              </CardFooter>
             
            </Card>
          </Container>
        );
      })}
      <p className ="totalCompra">Total Compra: {totalCompra()}</p>
      <div>{(cart.length > 0) ? <SendOrder /> : <NoOrder />}</div>
    </>
  );
};

export default Cart;
