import { Button, ButtonGroup } from "@chakra-ui/button";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Divider, Heading, Stack, Text } from "@chakra-ui/layout";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import APIService from "../services/APIService";
import axios from "axios";

const CardLayout = () => {
  const [album, setAlbum] = useState([]);

  const fetchAlbums = async () => {
    return await axios
      .get("https://jsonplaceholder.typicode.com/photos/?_limit=5")
      .then((res) => res.data);
  };

  useEffect(() => {
    const query1 = () => {
      const { data, isLoading, isError, refetch } = useQuery(
        "albums",
        fetchAlbums
      );
      setAlbum(data);
      console.log(album);
    };
    query1();
  }, []);

  return (
    <div>
      {/* {data.map((albumDatas) => (
        <div key={albumDatas?.id}>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={`${albumDatas?.url}`}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                boxSize={100}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{albumDatas?.albumId}</Heading>
                <Text>{albumDatas?.title}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
      ))} */}

      {data.map((user) => (
        <p key={user.id}>{user.title}</p>
      ))}
    </div>
  );
};

export default CardLayout;
