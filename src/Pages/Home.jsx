import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios, { Axios } from "axios";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

export const Home = () => {
  const getCatfacts = () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  };

  // const { data, isLoading, isError, refetch } = useQuery(["cat"], getCatfacts);

  // if (isLoading) return <p>Loading...</p>;

  // if (isError) return <p>"error..." </p>;

  return;
};

export default Home;
