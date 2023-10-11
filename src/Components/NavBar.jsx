import { Box, Heading, Select } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { PersonOffOutlined } from "@mui/icons-material";

export const NavBar = () => {
  return (
    <Flex alignItems="center" gap="3" p={"10px"}>
      <Heading as="h1">NavBar</Heading>
      <Spacer />
      <Box>
        <Select borderStyle={"solid"} icon={<PersonOffOutlined />}>
          <option>Logout</option>
        </Select>
      </Box>
    </Flex>
  );
};

export default NavBar;
