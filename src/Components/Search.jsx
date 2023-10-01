import { IconButton } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { SearchOutlined } from "@mui/icons-material";
import React from "react";

const Search = () => {
  return (
    <div>
      <Flex justify={"end"} pt="5" px={10}>
        <Input w="50" border="2px" placeholder="search title" />
        <IconButton colorScheme="teal" icon={<SearchOutlined />}></IconButton>
      </Flex>
    </div>
  );
};

export default Search;
