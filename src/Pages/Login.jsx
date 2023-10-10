import {
  AbsoluteCenter,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Email,
  EmailOutlined,
  EmailRounded,
  Facebook,
  Google,
  Instagram,
  Password,
  PasswordOutlined,
  PasswordRounded,
  PasswordSharp,
} from "@mui/icons-material";
import React, { useState } from "react";
import "../Styles/Login.css";
import { EmailIcon } from "@chakra-ui/icons";

export const Login = () => {
  return (
    <div>
      <Container boxShadow="lg" boxSize={"sm"} alignItems="center">
        <Stack alignItems={"center"}>
          <Text fontSize={"3xl"} as={"b"} gap={10}>
            Login to your Account
          </Text>

          <Text fontSize={"sm"} textAlign={"center"} color="gray.500">
            Get started with our app, just create an account <br />
            and enjoy the experience.
          </Text>

          <FormControl isRequired>
            <Stack spacing={3}>
              <Box>
                <Text fontSize="small" color={"gray.500"}>
                  Username
                </Text>
                <InputGroup size={"md"}>
                  <InputLeftElement>
                    <EmailRounded color="gray.500" />
                  </InputLeftElement>
                  <Input type="text" placeholder="name@email.com" />
                </InputGroup>
              </Box>
              <Box>
                <Text fontSize="small" color={"gray.500"}>
                  Password
                </Text>
                <InputGroup size={"md"}>
                  <InputLeftElement>
                    <PasswordSharp />
                  </InputLeftElement>
                  <Input type="password" placeholder="Password" />
                </InputGroup>
              </Box>

              <Box>
                <Button colorScheme="blue" w="100%">
                  Sign in
                </Button>
              </Box>

              <Box position={"relative"} padding={5}>
                <Divider />
                <AbsoluteCenter bg={"white"} px={4}>
                  OR
                </AbsoluteCenter>
              </Box>
            </Stack>
          </FormControl>
        </Stack>
      </Container>
    </div>
  );
};

export default Login;
