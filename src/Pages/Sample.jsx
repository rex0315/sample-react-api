import React, { useEffect, useState } from "react";
import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react";

export const Sample = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const inputEmailError = inputEmail === "";
  const inputPasswordError = inputPassword === "";

  return (
    <Grid templateColumns="repeat(2, 1fr)" display="flex">
      <GridItem>
        <Image
          objectFit="cover"
          loading="lazy"
          boxSize="full"
          src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
        />
      </GridItem>
      <Spacer />
      <GridItem w="30%" bg="white" position={"relative"}>
        <Center>
          <Heading color={"Black.900"} pt="20px">
            Login
          </Heading>
        </Center>
        <VStack h="100vh" p={5} justifyItems="center">
          <Box>
            <FormControl
              isRequired
              isInvalid={inputEmailError || inputPasswordError}
            >
              <FormLabel>Username or Email</FormLabel>
              <Input
                type="text"
                value={inputEmail}
                placeholder="Username"
                onChange={(event) => setInputEmail(event.target.value)}
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={inputPassword}
                placeholder="Password"
                onChange={(event) => setInputPassword(event.target.value)}
              />
              {inputEmailError || inputPasswordError ? (
                <FormErrorMessage>
                  <p>Input fields required</p>
                </FormErrorMessage>
              ) : (
                <FormHelperText>
                  <p>Input fields fulfilled</p>
                </FormHelperText>
              )}
            </FormControl>
          </Box>
          <Divider />
          <Grid gap={5} display={"flex"}>
            <GridItem>adasdas</GridItem>
            <GridItem>asdasd</GridItem>
            <GridItem>asdasd</GridItem>
          </Grid>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default Sample;
