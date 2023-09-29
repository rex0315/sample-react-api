import React from "react";
import { Link } from "react-router-dom";
import { Center, HStack, Heading } from "@chakra-ui/react";

import "./NavBar.css";
import { Box, Container, Flex, Spacer } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <Container>
      <Heading>NavBar</Heading>

      <HStack spacing="24px" display="flex">
        <Box>
          <Link to={"/"}>Home</Link>
        </Box>
        <Box>
          <Link to={"/About"}>About</Link>
        </Box>
        <Box>
          <Link to={"/contact"}>Contact</Link>
        </Box>
      </HStack>
    </Container>
  );
};

export default NavBar;
