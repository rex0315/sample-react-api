import { Container, Flex, Skeleton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios, { Axios } from "axios";

import CardLayout from "../Components/CardLayout";
import { useState } from "react";
import Search from "../Components/Search";
import Loading from "../Components/Loading";

export const Home = () => {
  const [album, setAlbum] = useState([]);
  const fetchAlbum = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos/?_limit=5"
    );

    setAlbum(data);
    console.log(data);
    return data;
  };

  const { data, isFetching, isError, isSuccess, refetch } = useQuery(
    ["user"],
    fetchAlbum
  );

  return (
    <>
      <div>
        <Search />
        <Flex>
          {album.map((album) => (
            <Container paddingY={50}>
              <CardLayout
                key={album.id}
                album={album}
                isFetching={isFetching}
              />
            </Container>
          ))}
        </Flex>
      </div>
    </>
  );
};

export default Home;
