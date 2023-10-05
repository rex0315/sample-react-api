import {
  Button,
  ButtonGroup,
  Center,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { EmailOutlined, Password } from "@mui/icons-material";
import React from "react";

export const Login = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" display="flex">
      <GridItem w="100%" h="100vh">
        <Image
          objectFit="cover"
          loading="lazy"
          boxSize="full"
          src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
        />
      </GridItem>
      <Spacer />
      <GridItem w="30%" h="100vh" bg="purple.300" position={"relative"}>
        <Center>
          <Heading color={"whiteAlpha.900"} pt="20px">
            Login
          </Heading>
        </Center>

        <VStack spacing="30px" p={5} justifyItems="center">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={EmailOutlined} color="whiteAlpha.900" />
            </InputLeftElement>
            <Input
              type="email"
              placeholder="Email Address"
              bg={"blackAlpha.400"}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="White.300"
              fontSize="1.2em"
            />
            <Input color={"whiteAlpha.900"} placeholder="Password: " />
            <InputLeftElement>
              <Icon as={Password} color="whiteAlpha.900" />
            </InputLeftElement>
          </InputGroup>

          <ButtonGroup marginTop={20}>
            <Button size="lg">Create</Button>
          </ButtonGroup>
        </VStack>
      </GridItem>

    </Grid>
    
  );
};

export default Login;
