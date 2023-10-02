import { Button, ButtonGroup } from "@chakra-ui/button";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import {
  Divider,
  Heading,
  Stack,
  HStack,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/layout";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import APIService from "../services/APIService";
import axios from "axios";

const CardLayout = ({ album }) => {
  return (
    <div>
      <HStack gap={10}>
        <Card maxW="sm">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image src={`${album?.url}`} borderRadius="lg" />
              <Heading size="md">{album?.albumId}</Heading>
              <Text>{album?.title}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter></CardFooter>
        </Card>
      </HStack>
    </div>
  );
};

export default CardLayout;
