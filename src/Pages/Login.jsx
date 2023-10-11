import {
  AbsoluteCenter,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AttachEmailOutlined,
  AttachEmailTwoTone,
  EmailRounded,
  Facebook,
  Google,
  Instagram,
  PasswordSharp,
  SignpostOutlined,
} from "@mui/icons-material";
import React from "react";
import "../Styles/Login.css";

export const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Container
        boxShadow="lg"
        boxSize={"-webkit-fit-content"}
        alignItems="center"
      >
        <Stack alignItems={"center"}>
          <Text fontSize={"3xl"} as={"b"} gap={10} mt={5}>
            Login to your Account
          </Text>

          <Text fontSize={"sm"} textAlign={"center"} color="gray.500">
            Get started with our app, just create an account <br />
            and enjoy the experience.
          </Text>

          <FormControl isRequired>
            <Stack spacing={3} py={5}>
              <Box>
                <Text fontSize="small" color={"gray.500"}>
                  Email
                </Text>
                <InputGroup size={"md"}>
                  <InputLeftElement>
                    <EmailRounded color="gray.500" />
                  </InputLeftElement>
                  <Input
                    name="emailInput"
                    id="emailInput"
                    type="text"
                    placeholder="name@email.com"
                  />
                </InputGroup>
              </Box>
              <Box>
                <Text fontSize="small" color={"gray.500"} my={2}>
                  Password
                </Text>
                <InputGroup size={"md"}>
                  <InputLeftElement>
                    <PasswordSharp />
                  </InputLeftElement>
                  <Input
                    name="passwordInput"
                    id="passwordInput"
                    type="password"
                    placeholder="Password"
                  />
                </InputGroup>
              </Box>

              <Box>
                <Button colorScheme="blue" w="100%">
                  Sign in
                </Button>
              </Box>
              <Box>
                <Button border borderColor={"whiteAlpha.500"} w="100%">
                  Sign Up
                </Button>
              </Box>
              <Box position={"relative"} padding={5}>
                <Divider />
                <AbsoluteCenter bg={"white"} px={4}>
                  Or
                </AbsoluteCenter>
              </Box>
              <HStack justifyContent={"center"} spacing={5} py={"-1"}>
                <IconButton colorScheme="gray" icon={<Google />} />
                <IconButton colorScheme="gray" icon={<Facebook />} />
                <IconButton colorScheme="gray" icon={<Instagram />} />
                <IconButton
                  onClick={onOpen}
                  colorScheme="gray"
                  icon={<AttachEmailTwoTone />}
                />
              </HStack>
            </Stack>
          </FormControl>
        </Stack>

        <Modal
          // isCentered={true}
          motionPreset="slideInTop"
          size={"sm"}
          isOpen={isOpen}
          onClose={onClose}
          justifyContent={"center"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader justifyContent={"center"}>Magic Link</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text my={1}>Email</Text>
              <Input
                name="emailInput"
                id="emailInput"
                type="text"
                placeholder="name@email.com"
              />
            </ModalBody>

            <ModalFooter justifyContent={"center"}>
              <Button colorScheme="blue">Send Magic Link via email</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </div>
  );
};

export default Login;
