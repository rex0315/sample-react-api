import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  CheckboxIcon,
  Container,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios, { Axios } from "axios";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import APIService from "../services/APIService";
import { blueGrey } from "@mui/material/colors";
import { CreditCardOutlined } from "@mui/icons-material";
import CardLayout from "../Components/CardLayout";

export const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], APIService());

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>"error..." </p>;

  return (
    <>
      {isLoading && "Loading"}
      <CardLayout />
    </>
  );
};

export default Home;
