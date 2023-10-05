import { Link } from "react-router-dom";
import {
  AbsoluteCenter,
  Button,
  ButtonGroup,
  Center,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Box, Container, Flex, Spacer, Grid } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <Flex alignItems="center" gap="3" p={"10px"}>
      <Heading as="h1">NavBar</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box>
          <Link to="/">Home</Link>
        </Box>
        <Box>
          <Link to="/Features">Features</Link>
        </Box>
        <Box>
          <Link to="/How">How it works</Link>
        </Box>
        <Box>
          <Link to="/Business">For business</Link>
        </Box>
      </HStack>

      <Spacer />
      <ButtonGroup>
        <Button colorScheme="white" color={"blackAlpha.900"}>
          <Link to="/Sample">Sample</Link>
        </Button>
        <Button colorScheme="white" color={"blackAlpha.900"}>
          <Link to="/Login">Login</Link>
        </Button>
        <Button colorScheme="purple">
          <Link to="/SignUp">Signup</Link>
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default NavBar;
