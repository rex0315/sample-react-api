import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import { Box, Container, Flex, Spacer } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <Container w="100">
      <Box display="flex" bg="blue.300" alignItems="baseline" w="100%">
        <h1>NavBar</h1>
        <Spacer />
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </Box>
    </Container>
  );
};

export default NavBar;
