import {
  Avatar,
  Badge,
  Box,
  HStack,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Select,
  Tag,
  TagLabel,
  Text,
  color,
} from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import {
  Email,
  Person2,
  PersonOffOutlined,
  Search,
  SearchOffOutlined,
  ShoppingBasket,
} from "@mui/icons-material";

export const NavBar = () => {
  return (
    <Flex alignItems="center" gap="3" p={"10px"} bg="#BA704F" px={10}>
      <Heading as="h1" color={"white"}>
        BookSiFy
      </Heading>
      <Spacer />
      <Box display={"flex"} gap={3}>
        <Link color={"white"}>Home</Link>
        <Link color={"white"}>About Us</Link>
        <Link color={"white"}>Services</Link>
        <Link color={"white"}>Blog</Link>
        <Link color={"white"}>FAQs</Link>
        <Link color={"white"}>Contact Us</Link>
      </Box>
      <Spacer />
      <Box>
        <InputGroup>
          <InputRightElement>
            <Icon
              bgColor={"white"}
              color={"brown"}
              boxSize={"20px"}
              as="button"
            >
              <Search />
            </Icon>
          </InputRightElement>
          <Input placeholder="search" color={"black"} bgColor={"white"} />
        </InputGroup>
      </Box>

      <Box gap={10}>
        <HStack>
          <IconButton
            borderColor={"white"}
            backgroundColor="#DFA878"
            borderRadius={"full"}
            icon={<Email />}
          />
          <Text fontSize={"lg"} color="white">
            Subscribe
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
};

export default NavBar;
