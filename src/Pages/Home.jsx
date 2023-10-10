import { Container, Flex, Skeleton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios, { Axios } from "axios";

import CardLayout from "../Components/CardLayout";
import { useEffect, useState } from "react";
import Search from "../Components/Search";
import Loading from "../Components/Loading";
import Login from "../Pages/Login";

export const Home = () => {
  const [album, setAlbum] = useState([]);

  return (
    <>
      <div>
        <Login />
        {/* <Search />
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
        </Flex> */}
      </div>
    </>
  );
};

export default Home;
