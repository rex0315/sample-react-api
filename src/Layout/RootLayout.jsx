import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Home from "../Pages/Home";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import NavMenu from "../Components/NavMenu";
import { useRef } from "react";
import { Menu } from "@mui/icons-material";
import Search from "../Components/Search";

export const RootLayout = () => {
  const btnRef = useRef();
  return (
    <div>
      {/* <NavBar /> */}
      <Grid
        // templateColumns="repeat(5, 1fr)"
        // templateRows="repeat(2, 1fr)"
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"100px 1fr"}
        gridTemplateColumns={"0 1fr"}
        // h="200px"
        gap="1"
      >
        {/* <GridItem area={"nav"}>
          <VStack
            bg={"teal"}
            boxSize="100vh"
            alignItems="self-center"
            spacing={5}
            w="250px"
          >
            <Grid mt="10" ml="10" templateColumns="repeat(1, 1fr)" gap={3}>
              <Flex align={"center"} gap={3}>
                <IconButton
                  icon={<Menu />}
                  boxSize={"50px"}
                  ref={btnRef}
                  colorScheme="teal"
                ></IconButton>
                <Text>Home</Text>
              </Flex>
              <Flex align={"center"} gap={3}>
                <IconButton
                  icon={<Menu />}
                  boxSize={"50px"}
                  ref={btnRef}
                  colorScheme="teal"
                ></IconButton>
                <Text>Create Posts</Text>
              </Flex>

              <Flex align={"center"} gap={3}>
                <IconButton
                  icon={<Menu />}
                  boxSize={"50px"}
                  ref={btnRef}
                  colorScheme="teal"
                ></IconButton>
                <Text>Feeds </Text>
              </Flex>
            </Grid>
          </VStack>
        </GridItem> */}

        {/* <GridItem area={"header"}>
          <NavBar />
        </GridItem> */}
        <GridItem pl="2" area={"main"}>
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
};
