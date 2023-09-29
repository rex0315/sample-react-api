import { Button, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios, { Axios } from "axios";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

export const Home = () => {
  const getCatfacts = () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  };

  // const { data, isLoading, isError, refetch } = useQuery(["cat"], getCatfacts);

  // if (isLoading) return <p>Loading...</p>;

  // if (isError) return <p>"error..." </p>;

  return (
    <div>
      <h1>
        {/* <Text fontSize={"lg"}>{data?.fact}</Text>
      <Button colorScheme="blue" onClick={refetch}>
        refetch data
      </Button> */}
      </h1>
    </div>
  );
};

export default Home;
