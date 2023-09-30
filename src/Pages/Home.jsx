import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  CheckboxIcon,
  Container,
  Flex,
  Grid,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios, { Axios } from "axios";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import APIService from "../services/APIService";
import { blueGrey } from "@mui/material/colors";
import { CreditCardOutlined } from "@mui/icons-material";

export const Home = () => {
  // const { data, isLoading, isError, refetch } = useQuery(["cat"], APIService());

  // if (isLoading) return <p>Loading...</p>;

  // if (isError) return <p>"error..." </p>;

  return (
    <Grid>
      <Box
        maxW="full"
        maxH="100vh"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="gray.200"
      >
        <Image
          objectFit="cover"
          loading="lazy"
          src="https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1624&q=80"
        />
      </Box>

      {/* second section */}
      <Box bg="gray.200" textAlign="center" p={20}>
        <Heading as="h3" size="lg" pb={10}>
          Trusted by Greatest Companies
        </Heading>

        <Box>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <Image
              objectFit="fit"
              loading="lazy"
              boxSize="100px"
              src="/src/assets/react.svg"
            ></Image>
            <Image
              objectFit="fit"
              loading="lazy"
              boxSize="100px"
              src="/src/assets/react.svg"
            ></Image>
            <Image
              objectFit="fit"
              loading="lazy"
              boxSize="100px"
              src="/src/assets/react.svg"
            ></Image>
            <Image
              objectFit="fit"
              loading="lazy"
              boxSize="100px"
              src="/src/assets/react.svg"
            ></Image>
            <Image
              objectFit="fit"
              loading="lazy"
              boxSize="100px"
              src="/src/assets/react.svg"
            ></Image>
          </Grid>
        </Box>
      </Box>

      {/* Third Section */}
      <Box p={10}>
        <Center>
          <Heading textAlign="center">
            Banking that works <br /> around you
          </Heading>
        </Center>
      </Box>
      <Box>
        <HStack spacing={5} p={10} position={"top"} paddingX="300px">
          <Card bg="blue.300">
            <CardBody>
              <IconButton
                isRound={true}
                variant="Solid"
                colorScheme="teal"
                aria-label="Done"
                fontSize="20px"
                bg={"whiteAlpha.500"}
                icon={<CreditCardOutlined />}
              />
              <Heading as="h5" size="md" pt="5">
                Easy Payments
              </Heading>
              <Text pt="2">
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
          </Card>
          <Card bg="blue.300">
            <CardBody>
              <IconButton
                isRound={true}
                variant="Solid"
                colorScheme="teal"
                aria-label="Done"
                fontSize="20px"
                bg={"whiteAlpha.500"}
                icon={<CreditCardOutlined />}
              />
              <Heading as="h5" size="md">
                Easy Payments
              </Heading>
              <Text flexWrap={"wrap"}>
                View a summary of
                aadasdasasdasdasdasdasdasdasdasdasdasdasdasdadasdasddasdasdasdsll
                your customers over the last month.
              </Text>
            </CardBody>
          </Card>
          <Card bg="blue.300">
            <CardBody>
              <IconButton
                isRound={true}
                variant="Solid"
                colorScheme="teal"
                aria-label="Done"
                fontSize="20px"
                bg={"whiteAlpha.500"}
                icon={<CreditCardOutlined />}
              />
              <Heading as="h5" size="md">
                Easy Payments
              </Heading>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
          </Card>
        </HStack>
      </Box>
    </Grid>
  );
};

export default Home;
