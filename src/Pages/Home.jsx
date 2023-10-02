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
import { useState } from "react";

export const Home = () => {
  const [album, setAlbum] = useState([]);
  const fetchAlbum = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos/?_limit=4"
    );

    setAlbum(data);
    console.log(data);
    return data;
  };

  const { data, isLoading, isError, refetch } = useQuery(["user"], fetchAlbum);
  console.log(data);

  return (
    <>
      <Flex>
        {album.map((album) => (
          <div>
            <CardLayout key={album.id} album={album} />
          </div>
        ))}
        <CardLayout />
      </Flex>
    </>
  );
};

export default Home;
