import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <HStack justifyContent={"center"}>
      <Flex gap={"100px"}>
        <Box py={20}>
          <Text py={5} fontSize={"lg"}>
            About Us
          </Text>
          <Text fontFamily={"sans-serif"} fontSize={"3xl"}>
            Let us to take it <br /> to the next step for your
            <b> Book</b>
          </Text>
          <Text py={5} fontSize={"16px"}>
            There are many variations of passages of Lorem Ipsum available, but
            <br />
            the majority have suffered alteration in some form, by injected
            <br />
            humour, or randomised words which don't look even slightly
            believable.
          </Text>
        </Box>
        <Spacer />
        <Box boxSize={"md"}>
          <Image
            boxSize={"lg"}
            fit={"cover"}
            src="https://images.unsplash.com/photo-1616852245911-4d492408eb2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
          />
        </Box>
      </Flex>
    </HStack>
  );
};

export default AboutUs;
