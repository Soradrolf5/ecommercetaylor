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

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);


 /* const totalCompra = () => {
    let total = 0;
    cart.forEach((product) => {
        total += product.price * product.quantity;
    });
    };

    const eliminarCarrito = (id) => {
      const producto = cart.find((product) => product.id === id);
      cart.splice(cart.indexOf(producto), 1);
  };*/

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
                <Text>Price: {item.price}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="red"
                  //onClick={eliminarCarrito()}
                >
                  Eliminar
                </Button>
              </CardFooter>
             
            </Card>
          </Container>
        );
      })}
      <SendOrder />
    </>
  );
};

export default Cart;
