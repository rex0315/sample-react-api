import React from "react";
import { Link } from "react-router-dom";
import { Button, Center, HStack, Heading, VStack } from "@chakra-ui/react";

import "./NavBar.css";
import { Box, Container, Flex, Spacer, Grid } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <Container minWidth="-webkit-max-content" bg="blue.400">
      <Flex align="center" justify="space-between">
        <Box>
          <Heading>NavBar</Heading>
        </Box>

        <HStack gap="8" justify="space-evenly">
          <Box>
            <Link to={"/"}>Home</Link>
          </Box>
          <Box>
            <Link to={"/Features"}>Features</Link>
          </Box>
          <Box w="100%">
            <Link to={"/How"}>How it Works</Link>
          </Box>
          <Box>
            <Link to={"/Business"}>Business</Link>
          </Box>
        </HStack>

        <HStack>
          <Button>
            <Link to={"/Login"}>Login</Link>
          </Button>
          <Button>
            <Link to={"/SignUp"}>Sign Up</Link>
          </Button>
        </HStack>
      </Flex>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        Box with Flex props
      </Box>
      // shorthand using the `Flex` component
      <Flex justify="center">Flex Container</Flex>
    </Container>
  );
};

export default NavBar;
