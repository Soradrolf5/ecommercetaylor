import {
    Container,
    Heading,
    Input,
    Button,
    Text,
    Center,
    FormControl,
    FormLabel,
  } from "@chakra-ui/react";
  import { collection, getFirestore, addDoc } from "firebase/firestore";
  import { useState } from "react";
  
  const SendOrder = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name === "" || email === "") {
        alert("No pueden existir campos vacios");
      } else {
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id) );
      }
      setEmail(" ");
    };
  
    const db = getFirestore();
    const ordersCollection = collection(db, "orden");
  
    const order = {
      name,
      email,
    };
  
    return (
      <div className="form">
        <Center>
          <Heading>Sending orders</Heading>
        </Center>
  
        <Container>
          <FormControl>
            <form onSubmit={handleSubmit}>
              <FormLabel className="formLabel">NAME</FormLabel>
              <Input size="lg" onChange={(e) => setName(e.target.value)} />
              <FormLabel className="formLabel">EMAIL</FormLabel>
              <Input size="lg" onChange={(e) => setEmail(e.target.value)} />
              <Button colorScheme="teal" type="submit" m={5}>
                Send Infomation
              </Button>
            </form>
          </FormControl>
        </Container>
        <Center>
          <Text as="b" m={3} fontSize="xl">
            Order ID:{" "}
          </Text>
          <Text as="mark" fontSize="2xl">
            {orderId}
          </Text>
        </Center>
      </div>
    );
  };
  
  export default SendOrder;