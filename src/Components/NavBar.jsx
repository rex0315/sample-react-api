import { Link } from "react-router-dom";
import {
  AbsoluteCenter,
  Button,
  ButtonGroup,
  Center,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Box, Container, Flex, Spacer, Grid } from "@chakra-ui/react";
import { useState } from "react";
import {
  Email,
  Facebook,
  Google,
  Instagram,
  Password,
} from "@mui/icons-material";
import "./Modal.css";

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const inputEmailError = inputEmail === "";
  const inputPasswordError = inputPassword === "";
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
        <Button colorScheme="white" color={"blackAlpha.900"} onClick={onOpen}>
          Login
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />

            <ModalContent>
              <VStack p={5} justifyItems="center">
                {/* <FormControl
                  isRequired
                  isInvalid={inputEmailError || inputPasswordError}
                >
                  <FormLabel>Username or Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents={"none"}>
                      <Email color="gray.300" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      value={inputEmail}
                      placeholder="Username"
                      onChange={(event) => setInputEmail(event.target.value)}
                    />
                  </InputGroup>

                  <FormLabel pt={5}>Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents={"none"}>
                      <Password color="gray.100" />
                    </InputLeftElement>
                    <Input
                      type="password"
                      value={inputPassword}
                      placeholder="Password"
                      onChange={(event) => setInputPassword(event.target.value)}
                    />
                  </InputGroup>
                  {inputEmailError || inputPasswordError ? (
                    <FormErrorMessage>
                      <p>Input fields required</p>
                    </FormErrorMessage>
                  ) : (
                    <FormHelperText>
                      <p>Input fields fulfilled</p>
                    </FormHelperText>
                  )}
                </FormControl> */}

                <form className="form">
                  <p className="form-title">Sign in to your account</p>
                  <div className="input-container">
                    <input type="email" placeholder="Enter email" />
                    <span></span>
                  </div>
                  <div className="input-container">
                    <input type="password" placeholder="Enter password" />
                  </div>
                  <button type="submit" className="submit">
                    Sign in
                  </button>

                  <p className="signup-link">
                    No account?
                    <a href="">Sign up</a>
                  </p>
                </form>

                <Divider />
                <Center mt={2}>
                  <Heading as="h6" size="xs">
                    or sign up using
                  </Heading>
                </Center>

                <ModalFooter pt="-14">
                  <Grid gap={5} display={"flex"}>
                    <GridItem>
                      <IconButton
                        icon={<Google />}
                        bg={"whiteAlpha.100"}
                      ></IconButton>
                    </GridItem>
                    <GridItem>
                      <IconButton
                        icon={<Facebook />}
                        bg={"whiteAlpha.100"}
                      ></IconButton>
                    </GridItem>
                    <GridItem>
                      <IconButton
                        icon={<Instagram />}
                        bg={"whiteAlpha.100"}
                      ></IconButton>
                    </GridItem>
                  </Grid>
                </ModalFooter>
              </VStack>
            </ModalContent>
          </Modal>
        </Button>

        <Button colorScheme="purple">
          <Link to="/Sample">Sample</Link>
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default NavBar;
